# SSR
- Server side rendering: HTML, CSS code is rendered from server
- SEO optimize, example: dantri
- How to know:
    + HTML, CSS is displayed fully when end-user see "View page source"
- Advantage:
    + Good for SEO
    + The access first is faster
    + Short term application, maintain is easier than CSR
- Defect:
    + Reload all request from server (reload HTML, CSS) 

# CSR
- Client side rendering: HTML, CSS code is rendered from client
- How to know:
    + JS is displayed fully when end-user see "View page source"
- Advantage:
    + Switch tabs back and forth quickly
    + Long term application
- Defect:
    + No good for SEO
    + Must execute JS then HTML, CSS is appended