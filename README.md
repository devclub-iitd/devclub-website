landing page for devclub

dev preview usually on cringebut.fun


# NOTE, BUG
so basically i fucked up imports conventions for the project images and imported from /public/projects/ instead of /projects/ (violating the idea that /public/ should be treated as identical to /)

so when you build it you need to either fix it or just copy the public folder in the build to make those photos appear.
this mistake extends to the logo which i imported from /src/components/ instead of /components

TODO
- [ ] fix whatever is written above
- [ ] minify team photos (~80% of the size of the build)
