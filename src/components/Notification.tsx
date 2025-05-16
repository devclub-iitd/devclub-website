import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NotificationProps {
    message?: string;
    linkText?: string;
    linkUrl?: string;
    className?: string;
}

const Notification: FC<NotificationProps> = ({
    message = "DevClub's Executive Team Recruitment is Live!",
    linkText = "Apply Now →",
    linkUrl = "https://forms.gle/SShzsxRa3EPSrUdw8",
    className = ""
}) => {
    // Check if it's an external URL (should use <a> instead of Link)
    const isExternal = linkUrl.startsWith('http');

    return (
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 z-20 ${className}`}>
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full backdrop-blur-md bg-blue-500/10 border border-blue-400/20 shadow-lg shadow-blue-500/5">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-blue-100 font-medium">{message}</span>
                {isExternal ? (
                    <a 
                        href={linkUrl} 
                        className="text-xs font-semibold text-blue-300 hover:text-blue-200 ml-2 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {linkText}
                    </a>
                ) : (
                    <Link to={linkUrl} className="text-xs font-semibold text-blue-300 hover:text-blue-200 ml-2 transition-colors">
                        {linkText}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Notification;