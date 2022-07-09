"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4572],{8820:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return k}});var t=r(3117),i=r(102),o=(r(7294),r(3905)),a=r(1402),s=["components"],l={id:"process-service",title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1",sidebar_label:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1 (Worker Service)"},p=void 0,c={unversionedId:"process-service",id:"process-service",title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1",description:"",source:"@site/docs/process-service.mdx",sourceDirName:".",slug:"/process-service",permalink:"/furion/docs/process-service",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/process-service.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1653982921,formattedLastUpdatedAt:"May 31, 2022",frontMatter:{id:"process-service",title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1",sidebar_label:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1 (Worker Service)"},sidebar:"docs",previous:{title:"24. \u5373\u65f6\u901a\u8baf",permalink:"/furion/docs/signalr"},next:{title:"26. \u5b9a\u65f6\u4efb\u52a1/\u540e\u53f0\u4efb\u52a1",permalink:"/furion/docs/job"}},u={},k=[{value:"25.1 \u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1",id:"251-\u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1",level:2},{value:"25.2 \u5982\u4f55\u521b\u5efa <code>Worker Service</code>",id:"252-\u5982\u4f55\u521b\u5efa-worker-service",level:2},{value:"25.3 \u521b\u5efa <code>Worker</code>",id:"253-\u521b\u5efa-worker",level:2},{value:"25.3.1 \u591a\u4e2a <code>Worker</code>",id:"2531-\u591a\u4e2a-worker",level:3},{value:"25.3.2 \u751f\u547d\u5468\u671f",id:"2532-\u751f\u547d\u5468\u671f",level:3},{value:"25.4 \u96c6\u6210 <code>Furion</code>",id:"254-\u96c6\u6210-furion",level:2},{value:"25.5 \u6ce8\u518c\u670d\u52a1",id:"255-\u6ce8\u518c\u670d\u52a1",level:2},{value:"25.6 \u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1",id:"256-\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1",level:2},{value:"26.6.1 \u95f4\u9694\u6267\u884c\u65b9\u5f0f",id:"2661-\u95f4\u9694\u6267\u884c\u65b9\u5f0f",level:3},{value:"26.6.2 <code>Cron</code> \u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f\uff0c",id:"2662-cron-\u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f",level:3},{value:"25.7 \u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528",id:"257-\u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528",level:2},{value:"25.8 \u548c\u7f51\u7ad9\u4e00\u540c\u90e8\u7f72",id:"258-\u548c\u7f51\u7ad9\u4e00\u540c\u90e8\u7f72",level:2},{value:"25.9 \u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf",id:"259-\u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf",level:2},{value:"25.9.1 \u90e8\u7f72\u5230 <code>Windows Service</code>",id:"2591-\u90e8\u7f72\u5230-windows-service",level:3},{value:"25.9.2 \u90e8\u7f72\u5230 <code>Linux \u5b88\u62a4\u7a0b\u5e8f</code>",id:"2592-\u90e8\u7f72\u5230-linux-\u5b88\u62a4\u7a0b\u5e8f",level:3},{value:"25.10 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2510-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:k};function g(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"251-\u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1"},"25.1 \u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".NET Core 3.0")," \u65b0\u589e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u7684\u65b0\u9879\u76ee\u6a21\u677f\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u7f16\u5199\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u540e\u53f0\u670d\u52a1\uff0c\u5e76\u4e14\u80fd\u8f7b\u677e\u7684\u90e8\u7f72\u6210 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Windows\u670d\u52a1")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Linux \u5b88\u62a4\u7a0b\u5e8f")),"\u3002"),(0,o.kt)("h2",{id:"252-\u5982\u4f55\u521b\u5efa-worker-service"},"25.2 \u5982\u4f55\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"h2"},"Worker Service")),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u53ef\u76f4\u63a5\u521b\u5efa\u3002\u5982\u56fe\uff1a"),(0,o.kt)("img",{src:(0,a.Z)("img/wk.png")}),(0,o.kt)("h2",{id:"253-\u521b\u5efa-worker"},"25.3 \u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"h2"},"Worker")),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u521b\u5efa\u597d ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u9879\u76ee\u65f6\uff0c\u5df2\u7ecf\u81ea\u5e26\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u7c7b\u5e76\u7ee7\u627f\u81ea ",(0,o.kt)("inlineCode",{parentName:"p"},"BackgroundService")," \u57fa\u7c7b\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u6b63\u662f\u6211\u4eec\u8f85\u52a9\u89d2\u8272\u7684\u4e3b\u8981\u5de5\u4f5c\u7c7b\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u7f16\u5199\u6211\u4eec\u6240\u6709\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u901a\u5e38 ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u9ed8\u8ba4\u683c\u5f0f\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {9,18}",showLineNumbers:!0,"":!0,"{9,18}":!0},'using Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace FurionWorkers\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                await Task.Delay(1000, stoppingToken);\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5f53\u6211\u4eec\u521b\u5efa\u4e86 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Worker")," \u7c7b\u4e4b\u540e\uff0c\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Program.cs")," \u4e2d\u8fdb\u884c\u6ce8\u518c"),"\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {17}",showLineNumbers:!0,"":!0,"{17}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .ConfigureServices((hostContext, services) =>\n                {\n                    services.AddHostedService<Worker>();\n                });\n    }\n}\n")),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305\u540e\u53ef\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c\u3002")),(0,o.kt)("h3",{id:"2531-\u591a\u4e2a-worker"},"25.3.1 \u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"h3"},"Worker")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u662f\u652f\u6301\u5b9a\u4e49\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u8fdb\u884c\u534f\u8c03\u5de5\u4f5c\u7684\uff0c\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u662f\u5b8c\u5168\u72ec\u7acb\u7684\u5de5\u4f5c\u73af\u5883\uff0c\u4f46\u53ef\u5171\u4eab\u540c\u4e00\u4e3b\u8fdb\u7a0b\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"2532-\u751f\u547d\u5468\u671f"},"25.3.2 \u751f\u547d\u5468\u671f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u63d0\u4f9b\u4e86\u4e09\u4e2a\u6267\u884c\u65b9\u6cd5\uff0c\u5206\u522b\u4ee3\u8868\u4e09\u4e2a\u751f\u547d\u5468\u671f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StartAsync"),"\uff1a\u8d1f\u8d23\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"li"},"Worker Service"),"\uff0c\u5982\u679c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"StartAsync")," \u65b9\u6cd5\u7684\u7ebf\u7a0b\u88ab\u4e00\u76f4\u963b\u585e\u4e86\uff0c\u90a3\u4e48 ",(0,o.kt)("inlineCode",{parentName:"li"},"Worker Service")," \u7684\u542f\u52a8\u5c31\u4e00\u76f4\u5b8c\u6210\u4e0d\u4e86"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ExecuteAsync"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Worker Service")," \u771f\u6b63\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\u7684\u5730\u65b9\uff0c\u8fd9\u91cc\u4e0d\u80fd\u8c03\u7528\u963b\u585e\u4ee3\u7801\uff01\uff01\uff01"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StopAsync"),"\uff1a\u8d1f\u8d23\u7ed3\u675f ",(0,o.kt)("inlineCode",{parentName:"li"},"Worker Service"),"\uff0c\u5982\u679c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"StopAsync")," \u65b9\u6cd5\u7684\u7ebf\u7a0b\u88ab\u4e00\u76f4\u963b\u585e\u4e86\uff0c\u90a3\u4e48 ",(0,o.kt)("inlineCode",{parentName:"li"},"Worker Service")," \u7684\u7ed3\u675f\u5c31\u4e00\u76f4\u5b8c\u6210\u4e0d\u4e86")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {19,25,35}",showLineNumbers:!0,"":!0,"{19,25,35}":!0},'using Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace FurionWorkers\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        // \u542f\u52a8\n        public override Task StartAsync(CancellationToken cancellationToken)\n        {\n            return base.StartAsync(cancellationToken);\n        }\n\n        // \u6267\u884c\u903b\u8f91\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                await Task.Delay(1000, stoppingToken);\n            }\n        }\n\n        // \u505c\u6b62\n        public override Task StopAsync(CancellationToken cancellationToken)\n        {\n            return base.StopAsync(cancellationToken);\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"254-\u96c6\u6210-furion"},"25.4 \u96c6\u6210 ",(0,o.kt)("inlineCode",{parentName:"h2"},"Furion")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u96c6\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u975e\u5e38\u65b9\u4fbf\uff0c\u53ea\u9700\u8981\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u7684\u5305\u5373\u53ef\uff0c\u5e76\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},".Inject()")," \u65b9\u6cd5\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {15}",showLineNumbers:!0,"":!0,"{15}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .Inject()\n                .ConfigureServices((hostContext, services) =>\n                {\n                    // \u4ee5\u4e0b\u4ee3\u7801\u53ef\u4e0d\u7528\u7f16\u5199\uff0cFurion \u5df2\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c Worker;\n                    // services.AddHostedService<Worker>();\n                });\n    }\n}\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Inject()")," \u65b9\u6cd5\u6ce8\u518c\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u3001\u7f13\u5b58\u3001\u4f9d\u8d56\u6ce8\u5165\u3001\u52a0\u8f7d\u914d\u7f6e\u3001\u81ea\u5b9a\u4e49 Startup")," \u529f\u80fd\u3002"),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u96c6\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u540e\u4f1a\u81ea\u52a8\u626b\u63cf ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u7c7b\u5e76\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c\u3002")),(0,o.kt)("h2",{id:"255-\u6ce8\u518c\u670d\u52a1"},"25.5 \u6ce8\u518c\u670d\u52a1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u6ce8\u518c\u670d\u52a1\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Web")," \u7565\u6709\u4e0d\u540c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Web")," \u4e3b\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Starup.cs")," \u7c7b\u4e2d\u6ce8\u518c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u542f\u52a8\u7c7b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," \u65b9\u6cd5\u4e2d\u6ce8\u518c\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {16-28}",showLineNumbers:!0,"":!0,"{16-28}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .Inject()\n                .ConfigureServices((hostContext, services) =>\n                {\n                    // \u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\n                    services.AddDatabaseAccessor(options =>\n                    {\n                        options.AddDb<DefaultDbContext>();\n                    });\n\n                    // \u6ce8\u518c\u8fdc\u7a0b\u8bf7\u6c42\n                    services.AddRemoteRequest();\n\n                    // \u7b49\u7b49\u5176\u4ed6\u670d\u52a1\u6ce8\u518c\n                });\n    }\n}\n")),(0,o.kt)("h2",{id:"256-\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1"},"25.6 \u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u540c\u65f6\u4e5f\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u63d0\u4f9b\u4e86\u5b9a\u65f6\u4efb\u52a1\u7684\u652f\u6301\u3002"),(0,o.kt)("h3",{id:"2661-\u95f4\u9694\u6267\u884c\u65b9\u5f0f"},"26.6.1 \u95f4\u9694\u6267\u884c\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {23-27}",showLineNumbers:!0,"":!0,"{23-27}":!0},'using Furion.TaskScheduler;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace WorkerService1\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                // \u95f4\u9694\u6267\u884c\u4efb\u52a1\n                await SpareTime.DoAsync(1000, () =>\n                {\n                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                }, stoppingToken);\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"2662-cron-\u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f"},"26.6.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Cron")," \u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {23-27}",showLineNumbers:!0,"":!0,"{23-27}":!0},'using Furion.TaskScheduler;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace WorkerService1\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                // \u6267\u884c Cron \u8868\u8fbe\u5f0f\u4efb\u52a1\n                await SpareTime.DoAsync("*/5 * * * * *", () =>\n                {\n                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                }, stoppingToken, CronFormat.IncludeSeconds);\n            }\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"257-\u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528"},"25.7 \u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u53ea\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker")," \u63d0\u4f9b\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u5355\u4f8b\u4f5c\u7528\u57df"),"\u7684\u670d\u52a1\u6ce8\u5165\uff0c\u5982\u679c\u9700\u8981\u6ce8\u5165\u77ac\u65f6\u6216\u4f5c\u7528\u57df\u5bf9\u8c61\uff0c\u9700\u624b\u52a8\u521b\u5efa\u4f5c\u7528\u57df\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {7-8,19-31}",showLineNumbers:!0,"":!0,"{7-8,19-31}":!0},"public class Worker : BackgroundService\n{\n    // \u65e5\u5fd7\u5bf9\u8c61\n    private readonly ILogger<JobService> _logger;\n\n    // \u670d\u52a1\u5de5\u5382\n    private readonly IServiceScopeFactory _scopeFactory;\n    public Worker(ILogger<Worker> logger\n        , IServiceScopeFactory scopeFactory)\n    {\n        _logger = logger;\n        _scopeFactory = scopeFactory;\n    }\n\n    protected override Task ExecuteAsync(CancellationToken stoppingToken)\n    {\n        while (!stoppingToken.IsCancellationRequested)\n        {\n            using (var scope = _scopeFactory.CreateScope())\n            {\n                var services = scope.ServiceProvider;\n\n                // \u83b7\u53d6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n                var dbContext = Db.GetDbContext(services);\n\n                // \u83b7\u53d6\u4ed3\u50a8\n                var respository = Db.GetRepository<Person>(services);\n\n                // \u89e3\u6790\u5176\u4ed6\u670d\u52a1\n                var otherService = services.GetService<XXX>();\n            }\n        }\n\n        return Task.CompletedTask;\n    }\n}\n")),(0,o.kt)("h2",{id:"258-\u548c\u7f51\u7ad9\u4e00\u540c\u90e8\u7f72"},"25.8 \u548c\u7f51\u7ad9\u4e00\u540c\u90e8\u7f72"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u9664\u4e86\u53ef\u4ee5\u72ec\u7acb\u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u4ee5\u5916\uff0c\u8fd8\u652f\u6301\u5728\u7f51\u7ad9\u4e2d\u914d\u7f6e\uff0c\u4e5f\u5c31\u662f\u540c\u4e00\u5bbf\u4e3b\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u63a5\u53e3\uff0c\u652f\u6301\u4e24\u79cd\u65b9\u5f0f\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u65b9\u5f0f\u4e00\uff08\u63a8\u8350\uff09\nservice.AddHostedService<\u4f60\u7684WorkerService\u7c7b>();\n\n// \u65b9\u5f0f\u4e8c\uff0c\u901a\u5e38\u7528\u4e8e\u9700\u8981\u4f20\u9012\u6784\u9020\u51fd\u6570\nservice.AddHostedService(new \u4f60\u7684WorkerService\u7c7b());\n")),(0,o.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u90e8\u7f72\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"IIS")," \u4e2d\uff0c\u53ef\u80fd\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u88ab\u56de\u6536\u7684\u60c5\u51b5\uff0c\u6bd5\u7adf\u662f\u548c\u7f51\u7ad9\u540c\u4e00\u4e2a\u5bbf\u4e3b\u3002")),(0,o.kt)("h2",{id:"259-\u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf"},"25.9 \u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service")," \u652f\u6301\u90e8\u7f72\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows Service")," \u4e2d \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux \u5b88\u62a4\u8fdb\u7a0b\u4e2d")),(0,o.kt)("h3",{id:"2591-\u90e8\u7f72\u5230-windows-service"},"25.9.1 \u90e8\u7f72\u5230 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Windows Service")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65"))),(0,o.kt)("p",null,"\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.Extensions.Hosting.WindowsServices")," \u62d3\u5c55\u5305"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65"))),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},".UseWindowsService()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {15}",showLineNumbers:!0,"":!0,"{15}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .UseWindowsService()\n                .Inject()\n                .ConfigureServices((hostContext, services) =>\n                {\n                    // \u4ee5\u4e0b\u4ee3\u7801\u53ef\u4e0d\u7528\u7f16\u5199\uff0cFurion \u5df2\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c Worker;\n                    // services.AddHostedService<Worker>();\n                });\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e09\u6b65"))),(0,o.kt)("p",null,"\u53d1\u5e03 ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker Service"),"\uff0c\u53ef\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet publish -c Release -o C:\\FurionWorker")," \u547d\u4ee4\u53d1\u5e03\u6216\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u53d1\u5e03\u3002"),(0,o.kt)("p",null,"\u72ec\u7acb\u53d1\u5e03\u4e0d\u4f9d\u8d56 SDK \u65b9\u5f0f ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet publish -c release -r win10-x64 --framework net6.0")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u56db\u6b65"))),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"sc.exe")," \u5de5\u5177\u6765\u7ba1\u7406\u5e76\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows")," \u670d\u52a1\uff0c\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u5458\u6a21\u5f0f")," \u5e76\u6253\u5f00\u63a7\u5236\u53f0\uff0c\u8f93\u5165\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"sc.exe create FurionWorkerServices binPath= C:\\FurionWorker\\FurionWorker.exe\n")),(0,o.kt)("p",null,"\u6ce8\u610f",(0,o.kt)("inlineCode",{parentName:"p"},"="),"\u540e\u9762\u8981\u6709\u4e00\u4e2a\u7a7a\u683c",(0,o.kt)("br",{parentName:"p"}),"\n","\u521b\u5efa\u6210\u529f\u540e\u53ef\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"sc.exe query FurionWorkerServices")," \u67e5\u770b\u670d\u52a1\u72b6\u6001\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e94\u6b65"))),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"sc.exe start FurionWorkerServices"),"\uff0c\u542f\u52a8\u4e4b\u540e\u5c31\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows")," \u670d\u52a1\u5de5\u5177\u4e2d\u67e5\u770b\u4e86\u3002"),(0,o.kt)("p",null,"\u505c\u6b62\u670d\u52a1\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"sc.exe stop NETCoreDemoWorkerService")),(0,o.kt)("p",null,"\u5220\u9664\u670d\u52a1\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"sc.exe delete NETCoreDemoWorkerService")),(0,o.kt)("admonition",{title:"\u7279\u522b\u63d0\u9192",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"sc.exe")," \u547d\u4ee4\u5fc5\u987b\u5728 ",(0,o.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u5458")," \u6a21\u5f0f\u4e0b\u8fdb\u884c\u3002\nsc.exe delete NETCoreDemoWorkerService, \u6267\u884c\u5220\u9664\u65f6\u5019, \u628a",(0,o.kt)("inlineCode",{parentName:"p"},"Windows")," \u670d\u52a1\u5de5\u5177\u5173\u95ed, \u5426\u5219, \u7535\u8111\u91cd\u542f\u540e\u624d\u4f1a\u663e\u793a\u5220\u9664;")),(0,o.kt)("h3",{id:"2592-\u90e8\u7f72\u5230-linux-\u5b88\u62a4\u7a0b\u5e8f"},"25.9.2 \u90e8\u7f72\u5230 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Linux \u5b88\u62a4\u7a0b\u5e8f")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65"))),(0,o.kt)("p",null,"\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.Extensions.Hosting.Systemd")," \u62d3\u5c55\u5305"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65"))),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},".UseSystemd()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {15}",showLineNumbers:!0,"":!0,"{15}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .UseSystemd()\n                .Inject()\n                .ConfigureServices((hostContext, services) =>\n                {\n                    // \u4ee5\u4e0b\u4ee3\u7801\u53ef\u4e0d\u7528\u7f16\u5199\uff0cFurion \u5df2\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c Worker;\n                    // services.AddHostedService<Worker>();\n                });\n    }\n}\n")),(0,o.kt)("p",null,"\u90e8\u7f72\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux \u5b88\u62a4\u8fdb\u7a0b")," \u5c31\u662f\u8fd9\u4e48\u7b80\u5355\u3002"),(0,o.kt)("h2",{id:"2510-\u53cd\u9988\u4e0e\u5efa\u8bae"},"25.10 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}g.isMDXComponent=!0},3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return d}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(r),d=i,g=k["".concat(l,".").concat(d)]||k[d]||u[d]||o;return r?t.createElement(g,a(a({ref:n},c),{},{components:r})):t.createElement(g,a({ref:n},c))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=k;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);