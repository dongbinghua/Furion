"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3867],{247:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(1402),l=["components"],s={id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",sidebar_label:"22. \u4e8b\u4ef6\u603b\u7ebf\uff08New\uff09"},u=void 0,c={unversionedId:"event-bus",id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",description:"",source:"@site/docs/event-bus.mdx",sourceDirName:".",slug:"/event-bus",permalink:"/furion/docs/event-bus",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/event-bus.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1661842230,formattedLastUpdatedAt:"Aug 30, 2022",frontMatter:{id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",sidebar_label:"22. \u4e8b\u4ef6\u603b\u7ebf\uff08New\uff09"},sidebar:"docs",previous:{title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316\uff08\u591a\u8bed\u8a00\uff09",permalink:"/furion/docs/local-language"},next:{title:"23. JSON \u5e8f\u5217\u5316",permalink:"/furion/docs/json-serialization"}},p={},m=[{value:"22.1 \u5173\u4e8e\u4e8b\u4ef6\u603b\u7ebf",id:"221-\u5173\u4e8e\u4e8b\u4ef6\u603b\u7ebf",level:2},{value:"22.2 \u5feb\u901f\u5165\u95e8",id:"222-\u5feb\u901f\u5165\u95e8",level:2},{value:"22.3 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90",id:"223-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90",level:2},{value:"22.4 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668",id:"224-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668",level:2},{value:"22.4.1 <code>RabbitMQ</code> \u81ea\u5b9a\u4e49\u6307\u5357",id:"2241-rabbitmq-\u81ea\u5b9a\u4e49\u6307\u5357",level:3},{value:"22.5 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005",id:"225-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005",level:2},{value:"22.6 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668",id:"226-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668",level:2},{value:"22.7 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668",id:"227-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668",level:2},{value:"22.8 \u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1",id:"228-\u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1",level:2},{value:"22.9 \u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38",id:"229-\u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38",level:2},{value:"22.10 \u4e8b\u4ef6\u603b\u7ebf\u5de5\u5382",id:"2210-\u4e8b\u4ef6\u603b\u7ebf\u5de5\u5382",level:2},{value:"22.11 <code>MessageCenter</code> \u9759\u6001\u7c7b",id:"2211-messagecenter-\u9759\u6001\u7c7b",level:2},{value:"22.12 <code>EventBusOptionsBuilder</code> \u914d\u7f6e",id:"2212-eventbusoptionsbuilder-\u914d\u7f6e",level:2},{value:"22.13 \u5982\u4f55\u5b9e\u73b0\u6570\u636e\u5e93\u4e8b\u52a1\u63a7\u5236",id:"2213-\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u5e93\u4e8b\u52a1\u63a7\u5236",level:2},{value:"22.14 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2214-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"v2.20 \u4ee5\u4e0b\u7248\u672c\u8bf4\u660e",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Furion v2.20+")," \u7248\u672c\u540e\u91c7\u7528 ",(0,o.kt)("a",{parentName:"strong",href:"https://gitee.com/dotnetchina/Jaina"},"Jaina")," \u4e8b\u4ef6\u603b\u7ebf\u66ff\u6362\u539f\u6709\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"EventBus")),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"./event-bus-old"},"\u67e5\u770b\u65e7\u6587\u6863"))),(0,o.kt)("h2",{id:"221-\u5173\u4e8e\u4e8b\u4ef6\u603b\u7ebf"},"22.1 \u5173\u4e8e\u4e8b\u4ef6\u603b\u7ebf"),(0,o.kt)("p",null,"\u4e8b\u4ef6\u603b\u7ebf\u662f\u5bf9\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f\u7684\u4e00\u79cd\u5b9e\u73b0\u3002\u5b83\u662f\u4e00\u79cd\u96c6\u4e2d\u5f0f\u4e8b\u4ef6\u5904\u7406\u673a\u5236\uff0c\u5141\u8bb8\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e4b\u95f4\u8fdb\u884c\u5f7c\u6b64\u901a\u4fe1\u800c\u53c8\u4e0d\u9700\u8981\u76f8\u4e92\u4f9d\u8d56\uff0c\u8fbe\u5230\u4e00\u79cd\u89e3\u8026\u7684\u76ee\u7684\u3002"),(0,o.kt)("img",{src:(0,i.Z)("img/ebs.png")}),(0,o.kt)("h2",{id:"222-\u5feb\u901f\u5165\u95e8"},"22.2 \u5feb\u901f\u5165\u95e8"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e8b\u4ef6\u8ba2\u9605\u8005 ",(0,o.kt)("inlineCode",{parentName:"li"},"ToDoEventSubscriber"),"\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2,10-11,19-21,28-30,32,36-38,44-48}",showLineNumbers:!0,"":!0,"{2,10-11,19-21,28-30,32,36-38,44-48}":!0},'// \u5b9e\u73b0 IEventSubscriber \u63a5\u53e3\npublic class ToDoEventSubscriber : IEventSubscriber\n{\n    private readonly ILogger<ToDoEventSubscriber> _logger;\n    public ToDoEventSubscriber(ILogger<ToDoEventSubscriber> logger)\n    {\n        _logger = logger;\n    }\n\n    [EventSubscribe("ToDo:Create")]\n    public async Task CreateToDo(EventHandlerExecutingContext context)\n    {\n        var todo = context.Source;\n        _logger.LogInformation("\u521b\u5efa\u4e00\u4e2a ToDo\uff1a{Name}", todo.Payload);\n        await Task.CompletedTask;\n    }\n\n    // \u652f\u6301\u591a\u4e2a\n    [EventSubscribe("ToDo:Create")]\n    [EventSubscribe("ToDo:Update")]\n    public async Task CreateOrUpdateToDo(EventHandlerExecutingContext context)\n    {\n        var todo = context.Source;\n        _logger.LogInformation("\u521b\u5efa\u6216\u66f4\u65b0\u4e00\u4e2a ToDo\uff1a{Name}", todo.Payload);\n        await Task.CompletedTask;\n    }\n\n    // \u652f\u6301\u679a\u4e3e\u7c7b\u578b\uff0cv3.4.3+ \u7248\u672c\u652f\u6301\n    [EventSubscribe(YourEnum.Some)]\n    public async Task EnumHandler(EventHandlerExecutingContext context)\n    {\n        var eventEnum = context.Source.EventId.ParseToEnum(); // \u5c06\u4e8b\u4ef6 Id \u8f6c\u6362\u6210\u679a\u4e3e\u5bf9\u8c61\n        await Task.CompletedTask;\n    }\n\n    // \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff0c4.2.10+ \u7248\u672c\u652f\u6301\n    [EventSubscribe("(^1[3456789][0-9]{9}$)|((^[0-9]{3,4}\\\\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\\\\([0-9]{3,4}\\\\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$))", FuzzyMatch = true)]\n    public async Task RegexHandler(EventHandlerExecutingContext context)\n    {\n        var eventId = context.Source.EventId;\n        await Task.CompletedTask;\n    }\n\n    // \u652f\u6301\u591a\u79cd\u5f02\u5e38\u91cd\u8bd5\u914d\u7f6e\uff0c4.2.10+ \u7248\u672c\u652f\u6301\n    [EventSubscribe("test:error", NumRetries = 3)]\n    [EventSubscribe("test:error", NumRetries = 3, RetryTimeout = 1000)] // \u91cd\u8bd5\u95f4\u9694\u65f6\u95f4\n    [EventSubscribe("test:error", NumRetries = 3, ExceptionTypes = new[] { typeof(ArgumentException) })]    // \u7279\u5b9a\u7c7b\u578b\u5f02\u5e38\u624d\u91cd\u8bd5\n    public async Task ExceptionHandler(EventHandlerExecutingContext context)\n    {\n        var eventId = context.Source.EventId;\n        await Task.CompletedTask;\n    }\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u63a7\u5236\u5668 ",(0,o.kt)("inlineCode",{parentName:"li"},"ToDoController"),"\uff0c\u4f9d\u8d56\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"IEventPublisher")," \u670d\u52a1\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4,13,16-21}",showLineNumbers:!0,"":!0,"{4,13,16-21}":!0},'public class ToDoController : ControllerBase\n{\n    // \u4f9d\u8d56\u6ce8\u5165\u4e8b\u4ef6\u53d1\u5e03\u8005 IEventPublisher\n    private readonly IEventPublisher _eventPublisher;\n    public ToDoController(IEventPublisher eventPublisher)\n    {\n        _eventPublisher = eventPublisher;\n    }\n\n    // \u53d1\u5e03 ToDo:Create \u6d88\u606f\n    public async Task CreateDoTo(string name)\n    {\n        await _eventPublisher.PublishAsync(new ChannelEventSource("ToDo:Create", name));\n    }\n\n    // v3.4.3+ \u7248\u672c\u652f\u6301\u53d1\u9001\u6d88\u606f\u7b80\u5316\n    public async Task CreateDoTo(string name)\n    {\n        await _eventPublisher.PublishAsync("ToDo:Create", name);\n        // \u4e5f\u652f\u6301\u679a\u4e3e\n        await _eventPublisher.PublishAsync(YourEnum.Some);\n    }\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"li"},"EventBus")," \u670d\u52a1\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2,5}",showLineNumbers:!0,"":!0,"{2,5}":!0},"// \u6ce8\u518c EventBus \u670d\u52a1\nservices.AddEventBus(builder =>\n{\n    // \u6ce8\u518c ToDo \u4e8b\u4ef6\u8ba2\u9605\u8005\n    builder.AddSubscriber<ToDoEventSubscriber>();\n\n    // \u901a\u8fc7\u7c7b\u578b\u6ce8\u518c\uff0cFurion 4.2.1+ \u7248\u672c\n    builder.AddSubscriber(typeof(ToDoEventSubscriber));\n\n    // \u6279\u91cf\u6ce8\u518c\u4e8b\u4ef6\u8ba2\u9605\u8005\n    builder.AddSubscribers(ass1, ass2, ....);\n});\n")),(0,o.kt)("admonition",{title:"\u61d2\u4eba\u63d0\u9192",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\u53ef\u4ee5\u4e0d\u7528\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"builder.AddSubscriber<T>()")," \u65b9\u5f0f\u4e00\u4e00\u6ce8\u518c\uff0c\u53ea\u9700\u8981\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"ISingleton")," \u63a5\u53e3\u5373\u53ef\uff0c\u5982\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1}",showLineNumbers:!0,"":!0,"{1}":!0},"public class ToDoEventSubscriber : IEventSubscriber, ISingleton\n{\n}\n")),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u6837\u5c31\u65e0\u9700\u5199 ",(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"builder.AddSubscriber<ToDoEventSubscriber>();"))," \u4ee3\u7801\u4e86\uff0c\u53ea\u9700\u4fdd\u7559 ",(0,o.kt)("inlineCode",{parentName:"p"},"services.AddEventBus()")," \u670d\u52a1\u5373\u53ef\u3002")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u9879\u76ee\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"info: Jaina.Samples.ToDoEventSubscriber[0]\n      \u521b\u5efa\u4e00\u4e2a ToDo\uff1aJaina\n")),(0,o.kt)("h2",{id:"223-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90"},"22.3 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventSource")," \u4f5c\u4e3a\u6d88\u606f\u8f7d\u4f53\uff0c\u4efb\u4f55\u5b9e\u73b0\u8be5\u63a5\u53e3\u7684\u7c7b\u90fd\u53ef\u4ee5\u5145\u5f53\u6d88\u606f\u8f7d\u4f53\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\uff0c\u53ea\u9700\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventSource")," \u63a5\u53e3\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,3,14,19,24,29,35-37}",showLineNumbers:!0,"":!0,"{1,3,14,19,24,29,35-37}":!0},"public class ToDoEventSource : IEventSource\n{\n    public ToDoEventSource()\n    {\n    }\n\n    public ToDoEventSource(string eventId, string todoName)\n    {\n        EventId = eventId;\n        ToDoName = todoName;\n    }\n\n    // \u81ea\u5b9a\u4e49\u5c5e\u6027\n    public string ToDoName { get; set; }\n\n    /// <summary>\n    /// \u4e8b\u4ef6 Id\n    /// </summary>\n    public string EventId { get; set; }\n\n    /// <summary>\n    /// \u4e8b\u4ef6\u627f\u8f7d\uff08\u643a\u5e26\uff09\u6570\u636e\n    /// </summary>\n    public object Payload { get; set; }\n\n    /// <summary>\n    /// \u4e8b\u4ef6\u521b\u5efa\u65f6\u95f4\n    /// </summary>\n    public DateTime CreatedTime { get; set; } = DateTime.UtcNow;\n\n    /// <summary>\n    /// \u53d6\u6d88\u4efb\u52a1 Token\n    /// </summary>\n    /// <remarks>\u7528\u4e8e\u53d6\u6d88\u672c\u6b21\u6d88\u606f\u5904\u7406</remarks>\n    [Newtonsoft.Json.JsonIgnore]\n    [System.Text.Json.Serialization.JsonIgnore]\n    public CancellationToken CancellationToken { get; set; }\n}\n")),(0,o.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'await _eventPublisher.PublishAsync(new ToDoEventSource ("ToDo:Create", "\u6211\u7684 ToDo Name"));\n')),(0,o.kt)("h2",{id:"224-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668"},"22.4 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Fruion")," \u9ed8\u8ba4\u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Channel")," \u4f5c\u4e3a\u4e8b\u4ef6\u6e90 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventSource")," \u5b58\u50a8\u5668\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u6d88\u606f\u961f\u5217\u7ec4\u4ef6\u8fdb\u884c\u66ff\u6362\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kafka\u3001RabbitMQ\u3001ActiveMQ")," \u7b49\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u90e8\u5206\u6570\u636e\u5e93 ",(0,o.kt)("inlineCode",{parentName:"p"},"Redis\u3001SQL Server\u3001MySql")," \u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\uff0c\u53ea\u9700\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventSourceStorer")," \u63a5\u53e3\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,11,17}",showLineNumbers:!0,"":!0,"{1,11,17}":!0},"public class RedisEventSourceStorer : IEventSourceStorer\n{\n    private readonly IRedisClient _redisClient;\n\n    public RedisEventSourceStorer(IRedisClient redisClient)\n    {\n        _redisClient = redisClient;\n    }\n\n    // \u5f80 Redis \u4e2d\u5199\u5165\u4e00\u6761\n    public async ValueTask WriteAsync(IEventSource eventSource, CancellationToken cancellationToken)\n    {\n        await _redisClient.WriteAsync(...., cancellationToken);\n    }\n\n    // \u4ece Redis \u4e2d\u8bfb\u53d6\u4e00\u6761\n    public async ValueTask<IEventSource> ReadAsync(CancellationToken cancellationToken)\n    {\n       return await _redisClient.ReadAsync(...., cancellationToken);\n    }\n}\n")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u66ff\u6362\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventSourceStorer"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4-8}",showLineNumbers:!0,"":!0,"{4-8}":!0},"services.AddEventBus(builder =>\n{\n    // \u66ff\u6362\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668\n    builder.ReplaceStorer(serviceProvider =>\n    {\n        var redisClient = serviceProvider.GetService<IRedisClient>();\n        return new RedisEventSourceStorer(redisClient);\n    });\n});\n")),(0,o.kt)("h3",{id:"2241-rabbitmq-\u81ea\u5b9a\u4e49\u6307\u5357"},"22.4.1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"RabbitMQ")," \u81ea\u5b9a\u4e49\u6307\u5357"),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 4.3.4 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u7531\u4e8e\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"RabbitMQ")," \u4f5c\u4e3a\u4e8b\u4ef6\u603b\u7ebf\u5b58\u50a8\u5668\u7684\u6bd4\u8f83\u591a\uff0c\u6240\u4ee5\u8fd9\u91cc\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u4f7f\u7528\u4f8b\u5b50\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"strong"},"RabbitMQ.Client")," \u62d3\u5c55\u5305")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"Install-Package RabbitMQ.Client -Version 6.4.0\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"strong"},"RabbitMQEventSourceStorer")," \u81ea\u5b9a\u4e49\u5b58\u50a8\u5668")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {13,41,60,66-78,99-103,116-117,125-126}",showLineNumbers:!0,"{13,41,60,66-78,99-103,116-117,125-126}":!0},'using Furion.EventBus;\nusing RabbitMQ.Client;\nusing RabbitMQ.Client.Events;\nusing System;\nusing System.Text;\nusing System.Text.Json;\nusing System.Threading;\nusing System.Threading.Channels;\nusing System.Threading.Tasks;\n\nnamespace Furion.Core;\n\npublic sealed class RabbitMQEventSourceStorer : IEventSourceStorer, IDisposable\n{\n    /// <summary>\n    /// \u5185\u5b58\u901a\u9053\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668\n    /// </summary>\n    private readonly Channel<IEventSource> _channel;\n\n    /// <summary>\n    /// \u901a\u9053\u5bf9\u8c61\n    /// </summary>\n    private readonly IModel _model;\n\n    /// <summary>\n    /// \u8fde\u63a5\u5bf9\u8c61\n    /// </summary>\n    private readonly IConnection _connection;\n\n    /// <summary>\n    /// \u8def\u7531\u952e\n    /// </summary>\n    private readonly string _routeKey;\n\n    /// <summary>\n    /// \u6784\u9020\u51fd\u6570\n    /// </summary>\n    /// <param name="factory">\u8fde\u63a5\u5de5\u5382</param>\n    /// <param name="routeKey">\u8def\u7531\u952e</param>\n    /// <param name="capacity">\u5b58\u50a8\u5668\u6700\u591a\u80fd\u591f\u5904\u7406\u591a\u5c11\u6d88\u606f\uff0c\u8d85\u8fc7\u8be5\u5bb9\u91cf\u8fdb\u5165\u7b49\u5f85\u5199\u5165</param>\n    public RabbitMQEventSourceStorer(ConnectionFactory factory, string routeKey, int capacity)\n    {\n        // \u914d\u7f6e\u901a\u9053\uff0c\u8bbe\u7f6e\u8d85\u51fa\u9ed8\u8ba4\u5bb9\u91cf\u540e\u8fdb\u5165\u7b49\u5f85\n        var boundedChannelOptions = new BoundedChannelOptions(capacity)\n        {\n            FullMode = BoundedChannelFullMode.Wait\n        };\n\n        // \u521b\u5efa\u6709\u9650\u5bb9\u91cf\u901a\u9053\n        _channel = Channel.CreateBounded<IEventSource>(boundedChannelOptions);\n\n        // \u521b\u5efa\u8fde\u63a5\n        _connection = factory.CreateConnection();\n        _routeKey = routeKey;\n\n        // \u521b\u5efa\u901a\u9053\n        _model = _connection.CreateModel();\n\n        // \u58f0\u660e\u8def\u7531\u961f\u5217\n        _model.QueueDeclare(routeKey, false, false, false, null);\n\n        // \u521b\u5efa\u6d88\u606f\u8ba2\u9605\u8005\n        var consumer = new EventingBasicConsumer(_model);\n\n        // \u8ba2\u9605\u6d88\u606f\u5e76\u5199\u5165\u5185\u5b58 Channel\n        consumer.Received += (ch, ea) =>\n        {\n            // \u8bfb\u53d6\u539f\u59cb\u6d88\u606f\n            var stringEventSource = Encoding.UTF8.GetString(ea.Body.ToArray());\n\n            // \u8f6c\u6362\u4e3a IEventSource\uff0c\u8fd9\u91cc\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u5e8f\u5217\u5316\u5de5\u5177\uff0c\u5982\u679c\u81ea\u5b9a\u4e49\u4e86 EventSource\uff0c\u6ce8\u610f\u5c5e\u6027\u662f\u53ef\u8bfb\u53ef\u5199\n            var eventSource = JsonSerializer.Deserialize<ChannelEventSource>(stringEventSource);\n\n            // \u5199\u5165\u5185\u5b58\u7ba1\u9053\u5b58\u50a8\u5668\n            _channel.Writer.TryWrite(eventSource);\n\n            // \u786e\u8ba4\u8be5\u6d88\u606f\u5df2\u88ab\u6d88\u8d39\n            _model.BasicAck(ea.DeliveryTag, false);\n        };\n\n        // \u542f\u52a8\u6d88\u8d39\u8005 \u8bbe\u7f6e\u4e3a\u624b\u52a8\u5e94\u7b54\u6d88\u606f\n        _model.BasicConsume(routeKey, false, consumer);\n    }\n\n    /// <summary>\n    /// \u5c06\u4e8b\u4ef6\u6e90\u5199\u5165\u5b58\u50a8\u5668\n    /// </summary>\n    /// <param name="eventSource">\u4e8b\u4ef6\u6e90\u5bf9\u8c61</param>\n    /// <param name="cancellationToken">\u53d6\u6d88\u4efb\u52a1 Token</param>\n    /// <returns><see cref="ValueTask"/></returns>\n    public ValueTask WriteAsync(IEventSource eventSource, CancellationToken cancellationToken)\n    {\n        // \u7a7a\u68c0\u67e5\n        if (eventSource == default)\n        {\n            throw new ArgumentNullException(nameof(eventSource));\n        }\n\n        // \u5e8f\u5217\u5316\uff0c\u8fd9\u91cc\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u5e8f\u5217\u5316\u5de5\u5177\n        var data = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(eventSource));\n\n        // \u53d1\u5e03\n        _model.BasicPublish("", _routeKey, null, data);\n\n        return ValueTask.CompletedTask;\n    }\n\n    /// <summary>\n    /// \u4ece\u5b58\u50a8\u5668\u4e2d\u8bfb\u53d6\u4e00\u6761\u4e8b\u4ef6\u6e90\n    /// </summary>\n    /// <param name="cancellationToken">\u53d6\u6d88\u4efb\u52a1 Token</param>\n    /// <returns>\u4e8b\u4ef6\u6e90\u5bf9\u8c61</returns>\n    public async ValueTask<IEventSource> ReadAsync(CancellationToken cancellationToken)\n    {\n        // \u8bfb\u53d6\u4e00\u6761\u4e8b\u4ef6\u6e90\n        var eventSource = await _channel.Reader.ReadAsync(cancellationToken);\n        return eventSource;\n    }\n\n    /// <summary>\n    /// \u91ca\u653e\u975e\u6258\u7ba1\u8d44\u6e90\n    /// </summary>\n    public void Dispose()\n    {\n        _model.Dispose();\n        _connection.Dispose();\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. \u66ff\u6362\u9ed8\u8ba4\u4e8b\u4ef6\u5b58\u50a8\u5668")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,4-8,11,14-16}",showLineNumbers:!0,"{1,4-8,11,14-16}":!0},'services.AddEventBus(options =>\n{\n    // \u521b\u5efa\u8fde\u63a5\u5de5\u5382\n    var factory = new ConnectionFactory\n    {\n        UserName = "admin",\n        Password = "q1w2e3",\n    };\n\n    // \u521b\u5efa\u9ed8\u8ba4\u5185\u5b58\u901a\u9053\u4e8b\u4ef6\u6e90\u5bf9\u8c61\uff0c\u53ef\u81ea\u5b9a\u4e49\u961f\u5217\u8def\u7531key\uff0c\u6bd4\u5982\u8fd9\u91cc\u662f eventbus\n    var rbmqEventSourceStorer = new RabbitMQEventSourceStorer(factory, "eventbus", 3000);\n\n    // \u66ff\u6362\u9ed8\u8ba4\u4e8b\u4ef6\u603b\u7ebf\u5b58\u50a8\u5668\n    options.ReplaceStorer(serviceProvider =>\n    {\n        return rbmqEventSourceStorer;\n    });\n});\n')),(0,o.kt)("img",{src:(0,i.Z)("img/evs1.png")}),(0,o.kt)("h2",{id:"225-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005"},"22.5 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u5185\u7f6e\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Channel")," \u7684\u4e8b\u4ef6\u53d1\u5e03\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelEventPublisher"),"\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\uff0c\u53ea\u9700\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventPublisher")," \u63a5\u53e3\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,10}",showLineNumbers:!0,"":!0,"{1,10}":!0},"public class ToDoEventPublisher : IEventPublisher\n{\n    private readonly IEventSourceStorer _eventSourceStorer;\n\n    public ChannelEventPublisher(IEventSourceStorer eventSourceStorer)\n    {\n        _eventSourceStorer = eventSourceStorer;\n    }\n\n    public async Task PublishAsync(IEventSource eventSource)\n    {\n        await _eventSourceStorer.WriteAsync(eventSource, eventSource.CancellationToken);\n    }\n}\n")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u66ff\u6362\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventPublisher"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"services.AddEventBus(builder =>\n{\n    // \u66ff\u6362\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668\n    builder.ReplacePublisher<ToDoEventPublisher>();\n});\n")),(0,o.kt)("h2",{id:"226-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668"},"22.6 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventHandlerMonitor")," \u76d1\u89c6\u5668\u63a5\u53e3\uff0c\u5b9e\u73b0\u8be5\u63a5\u53e3\u53ef\u4ee5\u76d1\u89c6\u6240\u6709\u8ba2\u9605\u4e8b\u4ef6\uff0c\u5305\u62ec ",(0,o.kt)("inlineCode",{parentName:"p"},"\u6267\u884c\u4e4b\u524d\u3001\u6267\u884c\u4e4b\u540e\uff0c\u6267\u884c\u5f02\u5e38\uff0c\u5171\u4eab\u4e0a\u4e0b\u6587\u6570\u636e"),"\u3002"),(0,o.kt)("p",null,"\u5982\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoEventHandlerMonitor"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,9,15}",showLineNumbers:!0,"":!0,"{1,9,15}":!0},'public class ToDoEventHandlerMonitor : IEventHandlerMonitor\n{\n    private readonly ILogger<ToDoEventHandlerMonitor> _logger;\n    public ToDoEventHandlerMonitor(ILogger<ToDoEventHandlerMonitor> logger)\n    {\n        _logger = logger;\n    }\n\n    public Task OnExecutingAsync(EventHandlerExecutingContext context)\n    {\n        _logger.LogInformation("\u6267\u884c\u4e4b\u524d\uff1a{EventId}", context.Source.EventId);\n        return Task.CompletedTask;\n    }\n\n    public Task OnExecutedAsync(EventHandlerExecutedContext context)\n    {\n        _logger.LogInformation("\u6267\u884c\u4e4b\u540e\uff1a{EventId}", context.Source.EventId);\n\n        if (context.Exception != null)\n        {\n            _logger.LogError(context.Exception, "\u6267\u884c\u51fa\u9519\u5566\uff1a{EventId}", context.Source.EventId);\n        }\n\n        return Task.CompletedTask;\n    }\n}\n')),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoEventHandlerMonitor"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"services.AddEventBus(builder =>\n{\n    // \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668\n    builder.AddMonitor<ToDoEventHandlerMonitor>();\n});\n")),(0,o.kt)("h2",{id:"227-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668"},"22.7 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventHandlerExecutor")," \u6267\u884c\u5668\u63a5\u53e3\uff0c\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u6267\u884c\u7b56\u7565\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u8d85\u65f6\u63a7\u5236\uff0c\u5931\u8d25\u91cd\u8bd5\u3001\u7194\u65ad\u7b49\u7b49"),"\u3002"),(0,o.kt)("p",null,"\u5982\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"RetryEventHandlerExecutor"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,3}",showLineNumbers:!0,"":!0,"{1,3}":!0},"public class RetryEventHandlerExecutor : IEventHandlerExecutor\n{\n    public async Task ExecuteAsync(EventHandlerExecutingContext context, Func<EventHandlerExecutingContext, Task> handler)\n    {\n        // \u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u6bcf\u9694 1s \u91cd\u8bd5\uff0c\u6700\u591a\u4e09\u6b21\n        await Retry.InvokeAsync(async () => {\n            await handler(context);\n        }, 3, 1000);\n    }\n}\n")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"RetryEventHandlerExecutor"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"services.AddEventBus(builder =>\n{\n    // \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668\n    builder.AddExecutor<RetryEventHandlerExecutor>();\n});\n")),(0,o.kt)("h2",{id:"228-\u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1"},"22.8 \u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"Event Bus")," \u6240\u6709\u670d\u52a1\u5747\u6ce8\u518c\u4e3a\u5355\u4f8b\uff0c\u5982\u9700\u4f7f\u7528\u4f5c\u7528\u57df\u670d\u52a1\uff08\u5355\u4f8b\u670d\u52a1\u53ef\u76f4\u63a5\u6ce8\u5165\uff09\uff0c\u53ef\u901a\u8fc7\u4f9d\u8d56\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"IServiceProvider")," \u5b9e\u4f8b\u5e76\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateScope()")," \u521b\u5efa\u4e00\u4e2a\u4f5c\u7528\u57df\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {5,8,12,17-21}",showLineNumbers:!0,"":!0,"{5,8,12,17-21}":!0},'public class ToDoEventSubscriber : IEventSubscriber\n{\n    private readonly ILogger<ToDoEventSubscriber> _logger;\n\n    public ToDoEventSubscriber(IServiceProvider services\n        , ILogger<ToDoEventSubscriber> logger)\n    {\n        Services = services;\n        _logger = logger;\n    }\n\n    public IServiceProvider Services { get; }\n\n    [EventSubscribe("ToDo:Create")]\n    public async Task CreateToDo(EventHandlerExecutingContext context)\n    {\n        // \u521b\u5efa\u65b0\u7684\u4f5c\u7528\u57df\n        using var scope = Services.CreateScope();\n\n        // \u89e3\u6790\u670d\u52a1\n        var scopedProcessingService = scope.ServiceProvider.GetRequiredService<IScopedProcessingService>();\n        // ....\n    }\n}\n')),(0,o.kt)("h2",{id:"229-\u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38"},"22.9 \u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"services.AddEventBus(builder =>\n{\n    // \u8ba2\u9605 EventBus \u672a\u6355\u83b7\u5f02\u5e38\n    builder.UnobservedTaskExceptionHandler = (obj, args) =>\n    {\n        // ....\n    };\n});\n")),(0,o.kt)("h2",{id:"2210-\u4e8b\u4ef6\u603b\u7ebf\u5de5\u5382"},"22.10 \u4e8b\u4ef6\u603b\u7ebf\u5de5\u5382"),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 4.2.10 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u5728\u8be5\u7248\u672c\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"IEventBusFactory")," \u5de5\u5382\u670d\u52a1\uff0c\u53ef\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u65b0\u589e\u6216\u5220\u9664\u8ba2\u9605\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {4,14-17,24}",showLineNumbers:!0,"{4,14-17,24}":!0},'public class TestEventBus : IDynamicApiController\n{\n    private readonly IEventPublisher _eventPublisher;\n    private readonly IEventBusFactory _eventBusFactory;\n    public TestEventBus(IEventPublisher eventPublisher, IEventBusFactory eventBusFactory)\n    {\n        _eventPublisher = eventPublisher;\n        _eventBusFactory = eventBusFactory;\n    }\n\n    // \u8fd0\u884c\u65f6\u52a8\u6001\u6dfb\u52a0\u4e00\u4e2a\u8ba2\u9605\u5668\n    public async Task AddSubscriber()\n    {\n        await _eventBusFactory.Subscribe("xxx", async (ctx) =>\n        {\n            Console.WriteLine("\u6211\u662f\u52a8\u6001\u7684");\n            await Task.CompletedTask;\n        });\n    }\n\n    // \u8fd0\u884c\u65f6\u52a8\u6001\u5220\u9664\u4e00\u4e2a\u8ba2\u9605\u5668\n    public async Task RemoveDynamic(string eventId)\n    {\n        await _eventBusFactory.Unsubscribe(eventId);\n    }\n}\n')),(0,o.kt)("h2",{id:"2211-messagecenter-\u9759\u6001\u7c7b"},"22.11 ",(0,o.kt)("inlineCode",{parentName:"h2"},"MessageCenter")," \u9759\u6001\u7c7b"),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 4.3.3 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 4.3.3")," \u7248\u672c\u65b0\u589e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageCenter")," \u9759\u6001\u7c7b\uff0c\u53ef\u5728\u4efb\u4f55\u5730\u65b9\u53d1\u9001\u4e8b\u4ef6\u6d88\u606f\u6216\u8ba2\u9605\u6d88\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2,5,11}",showLineNumbers:!0,"{2,5,11}":!0},'// \u53d1\u9001\u6d88\u606f\uff08\u542b\u8bf8\u591a\u91cd\u8f7d\uff09\nawait MessageCenter.PublishAsync("messageId", new {});\n\n// \u52a8\u6001\u8ba2\u9605\u6d88\u606f\nMessageCenter.Subscribe("messageId", async (ctx) => {\n    Console.WriteLine("\u6211\u662f\u52a8\u6001\u7684");\n    await Task.CompletedTask;\n});\n\n// \u53d6\u6d88\u8ba2\u9605\nMessageCenter.Unsubscribe("messageId");\n')),(0,o.kt)("h2",{id:"2212-eventbusoptionsbuilder-\u914d\u7f6e"},"22.12 ",(0,o.kt)("inlineCode",{parentName:"h2"},"EventBusOptionsBuilder")," \u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"EventBusOptionsBuilder")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"AddEventBus")," \u6784\u5efa\u670d\u52a1\u9009\u9879\uff0c\u8be5\u9009\u9879\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\u548c\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u6027",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ChannelCapacity"),"\uff1a\u9ed8\u8ba4\u5185\u5b58\u901a\u9053\u5bb9\u91cf"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UnobservedTaskExceptionHandler"),"\uff1a\u8ba2\u9605\u6267\u884c\u4efb\u52a1\u672a\u5bdf\u89c9\u5f02\u5e38"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UseUtcTimestamp"),"\uff1a\u662f\u5426\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"UTC")," \u4e8b\u4ef6\uff0c\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FuzzyMatch"),"\uff1a\u662f\u5426\u5f00\u542f\u5168\u5c40\u6a21\u7cca\u5339\u914d\uff08\u6b63\u5219\u8868\u8fbe\u5f0f\uff09\u4e8b\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"li"},"Id"),"\uff0c\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"false")))),(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AddSubscriber<TEventSubscriber>"),"\uff1a\u6dfb\u52a0\u8ba2\u9605\u8005"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ReplacePublisher<TEventPublisher>"),"\uff1a\u66ff\u6362\u53d1\u5e03\u8005"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ReplaceStorer(Func<IServiceProvider, IEventSourceStorer>)"),"\uff1a\u66ff\u6362\u5b58\u50a8\u5668"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AddMonitor<TEventHandlerMonitor>"),"\uff1a\u6dfb\u52a0\u76d1\u89c6\u5668"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AddExecutor<TEventHandlerExecutor>"),"\uff1a\u6dfb\u52a0\u6267\u884c\u5668")))),(0,o.kt)("h2",{id:"2213-\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u5e93\u4e8b\u52a1\u63a7\u5236"},"22.13 \u5982\u4f55\u5b9e\u73b0\u6570\u636e\u5e93\u4e8b\u52a1\u63a7\u5236"),(0,o.kt)("p",null,"\u76f8\u4fe1\u5f88\u591a\u670b\u53cb\u90fd\u4f7f\u7528\u4e86\u4e8b\u4ef6\u603b\u7ebf\u8fdb\u884c\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u4f46\u662f\u4e0d\u77e5\u9053\u5982\u4f55\u5b9e\u73b0\u4e8b\u52a1\u63a7\u5236\uff0c\u5b9e\u9645\u4e0a\u5e76\u4e0d\u96be\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,3,10,11,13,17}",showLineNumbers:!0,"{1,3,10,11,13,17}":!0},'await _eventPublisher.PublishAsync(eventId, new YourModel {\n    OtherArgs = ...,\n    Exception = ex    // \u6709\u5f02\u5e38\u4f20\u5165\uff0c\u5426\u5219 null\n});\n\n[EventSubscribe("ToDo:Create")]\npublic async Task CreateToDo(EventHandlerExecutingContext context)\n{\n    // \u5f00\u542f\u4e8b\u52a1....\n    var model = context.Source.Payload as YourModel;\n    if(model.Exception != null)\n    {\n        // \u56de\u6eda\u4e8b\u52a1\n    }\n    else\n    {\n        // \u63d0\u4ea4\u4e8b\u52a1\n    }\n    // \u7ed3\u675f\u4e8b\u52a1...\n\n    await Task.CompletedTask;\n}\n')),(0,o.kt)("h2",{id:"2214-\u53cd\u9988\u4e0e\u5efa\u8bae"},"22.14 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}v.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);