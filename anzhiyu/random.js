var posts=["2023/04/10/Articles/Security Copilot 分析/","2023/04/20/Git/Git 文档/","2023/03/21/Articles/微信&支付宝支付/","2023/04/21/Java/一、MyBatis/","2023/03/01/Linux/Linux 常用命令/","2023/03/01/博客/GitHub Page/","2023/03/01/博客/图床/","2023/03/01/博客/加载动画/","2023/03/01/博客/图标和字体/","2023/03/01/博客/Hexo 搭建静态博客/","2023/04/21/Java/三、SpringMVC/","2023/03/01/博客/域名/","2023/04/21/Java/二、Spring/","2023/03/01/博客/评论系统/","2023/03/01/博客/页脚/","2023/03/01/博客/首页/","2023/03/01/博客/导航栏/","2023/04/21/安全/Burp使用技巧/","2023/04/21/安全/CSRF跨站请求伪造攻击/","2023/04/21/安全/Centos7 虚拟机的安装教程/","2023/04/21/安全/Ubuntu 虚拟机的安装教程/","2023/04/21/安全/Windows7 虚拟机的安装教程/","2023/04/21/安全/Windows10 虚拟机的安装教程/","2023/04/21/安全/XSS的Waf绕过及工具使用/","2023/04/21/安全/XSS 跨站漏洞/","2023/04/21/安全/SQL注入详解/","2023/04/21/安全/水平垂直 越权/","2023/04/21/安全/pikachu通关记录/","2023/04/21/安全/pikachu靶场渗透详细/","2023/04/23/安全/网安术语解释/","2023/04/25/安全/apk 简单及绕过代理检测 抓包教程/","2023/04/25/安全/墨者靶场SQL注入记录/","2023/04/26/Books/《JavaScript权威指南》/ch1/","2023/04/26/Books/《JavaScript权威指南》/ch12/","2023/04/26/Books/《JavaScript权威指南》/ch10/","2023/04/26/Books/《JavaScript权威指南》/ch17/","2023/04/26/Books/《JavaScript权威指南》/ch14/","2023/04/26/Books/《JavaScript权威指南》/ch2/","2023/04/26/Books/《JavaScript权威指南》/ch11/","2023/04/26/Books/《JavaScript权威指南》/ch3/","2023/04/26/Books/《JavaScript权威指南》/ch16/","2023/04/26/Books/《JavaScript权威指南》/ch4/","2023/04/26/Books/《JavaScript权威指南》/ch13/","2023/04/26/Books/《JavaScript权威指南》/ch6/","2023/04/26/Books/《JavaScript权威指南》/ch7/","2023/04/26/Books/《JavaScript权威指南》/ch8/","2023/04/26/Books/《JavaScript权威指南》/ch15/","2023/04/26/Books/《JavaScript权威指南》/ch5/","2023/04/26/Books/《JavaScript权威指南》/ch9/","2023/05/03/Articles/黄金交易记录/","2023/05/04/Articles/APT组织/","2023/05/09/安全/HTTP状态码对照表/","2023/05/24/安全/sqlmap使用/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};