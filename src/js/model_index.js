var gridOne = [
    {id:1,images:"https://res3.vmallres.com/shopdc/pic/64c28d97-c414-4ab4-9353-16419a8d16f1.jpg",sale:"直降200元 | 现货",title:"HUAWEI nova 5z",desc:"4800万AI四摄 3200万人像超级夜景",price:"1399"},
    {id:2,images:"https://res2.vmallres.com/shopdc/pic/24197022-054d-4cdd-848b-8b4bb48cdc20.jpg",sale:"领券减100|最高24期免息",title:"HUAWEI nova 6 5G",desc:"前置3200万像素自动对焦",price:"3799"},
    {id:3,images:"https://res8.vmallres.com/shopdc/pic/dc898aa8-6549-44cc-97a9-cf135fc9885f.jpg",sale:"领券减100",title:"HUAWEI nova 5 Pro",desc:"4800万AI四摄",price:"2499"},
    {id:4,images:"https://res8.vmallres.com/shopdc/pic/a2353c49-8904-4d1f-9c9d-d5b72af8a4f2.png",sale:"赠碎屏险|享12期免息",title:"HUAWEI P30",desc:"麒麟980 超感光徕卡三摄",price:"3358"}
    ];
var gridTwo = [
    {id:5,images:"https://res2.vmallres.com/shopdc/pic/ebdee9c9-fc87-4d22-b67f-ddeec31d875f.jpg",sale:"提前预订立省400",title:"华为智慧屏",desc:"鸿鹄芯片 智能家居控制",price:"6999"},
    {id:6,images:"https://res3.vmallres.com/pimages//product/6901443297955/428_428_1556004123894mp.png",sale:"预订最高省200",title:"MateBook X Pro 2019款",desc:"3K全面屏轻薄笔记本",price:"7999"},
    {id:7,images:"https://res3.vmallres.com/shopdc/pic/8d506ce2-d255-409f-9259-1ca6c4eedf9c.jpg",sale:"稀缺货源 限量预订",title:"HUAWEI MatePad Pro",desc:"麒麟990芯片 多屏协同",price:"3299"},
    {id:8,images:"https://res1.vmallres.com/shopdc/pic/78e18c94-21c8-4da7-ae87-406db52b6d9b.jpg",sale:"预订最高省50元",title:"HUAWEI WATCH GT 2",desc:"麒麟A1芯片 强劲续航",price:"1388"},
    {id:9,images:"https://res9.vmallres.com/shopdc/pic/56dae36f-062d-41ef-a21d-419252fdf2dc.png",sale:"预订优惠100元",title:"FreeBuds 3 无线耳机",desc:"半开放式主动降噪",price:"1199"},
    {id:10,images:"https://res9.vmallres.com/shopdc/pic/fb9be468-7837-4aca-ab9f-9de934aa51b6.jpg",sale:"预订最高省400",title:"Sound X 智能音箱",desc:"帝瓦雷60W双低音炮",price:"1999"},
    {id:11,images:"https://res9.vmallres.com/pimages//product/6901443367184/428_428_602BF194C889E3294A39E798EF0D70DDBCEDB2E5A115A594mp.png",sale:"预订最高省200",title:"MateBook 13",desc:"2K全面屏",price:"4699"},
    {id:12,images:"https://res5.vmallres.com/pimages//product/6901443295951/428_428_1554964968160mp.png",sale:"预订优惠100元",title:"FreeLace 无线耳机",desc:"华为闪连快充技术 18小时长续航",price:"499"},
    {id:13,images:"https://res7.vmallres.com/pimages//product/6901443325214/428_428_B4B231BE557D9DC5AA9627749F0846ECD3DCE76D2A7F881Fmp.png",sale:"预订优惠40元",title:"华为超级快充无线充电器",desc:"27W大功率 Qi协议兼容",price:"199"},
    {id:14,images:"https://res2.vmallres.com/pimages//product/6901443362950/428_428_70FC8430832764C36DDB66C752A310DDF07511784B2396C1mp.png",sale:"预订优惠200元",title:"HUAWEI VR Glass",desc:"IMAX巨幕体验 支持手机投屏",price:"2999"},
    {id:15,images:"https://res4.vmallres.com/shopdc/pic/de2d4e23-1e10-4086-b536-414a51c704b3.jpg",sale:"预订最高省100元",title:"HUAWEI WATCH GT",desc:"NFC支付 实时心率 精准定位",price:"1088"},
    {id:16,images:"https://res4.vmallres.com/shopdc/pic/e20fee00-9ba8-49dc-95b6-ec941da46e38.jpg",sale:"预订立省40元",title:"华为手环 4 Pro",desc:"健康管理 专业运动指导",price:"399"}
    ];
var gridThree = [
    {id:17,images:"https://res4.vmallres.com/shopdc/pic/1fa48ff7-6ebc-493a-8d8b-70a17edc3580.jpg",sale:"最高领券减150",title:"华为畅享10 Plus",desc:"6.59英寸全视屏",price:"1399"},
    {id:18,images:"https://res1.vmallres.com/shopdc/pic/b4550dbc-a8d8-468d-bf63-618c7997c04c.jpg",sale:"赠好礼|享6期免息",title:"nova 6 SE",desc:"4800万AI四摄 自拍大不一样",price:"2199"},
    {id:19,images:"https://res8.vmallres.com/shopdc/pic/f05256aa-9efb-47c9-af4c-84d3b933b61d.jpg",sale:"赠扩展坞+3期免息",title:"MateBook 13 2020款",desc:"多屏协同 办公更便捷",price:"5999"},
    {id:20,images:"https://res0.vmallres.com/pimages//product/6901443366880/428_428_7CB5C12188355DCF11E7ECF8BADBE6CFFEC9B4912C085CD0mp.png",sale:"赠鼠标+3期免息",title:"MateBook D 14",desc:"轻薄灵动 长效续航 工作从容应对",price:"3999"},
    {id:21,images:"https://res2.vmallres.com/pimages//product/6901443364701/428_428_6779925E0ED35A85655C3E9B6B6BA65F1652C5FE3FBA3E28mp.png",sale:"赠蓝牙鼠标+3期免息",title:"MateBook 14 2020款",desc:"2K全面屏 多点触控",price:"5899"},
    {id:22,images:"https://res8.vmallres.com/shopdc/pic/3ae3ce77-3c9f-4fa4-b312-732c0f26d004.jpg",sale:"部分版本限量预订",title:"平板 M6 10.8英寸",desc:"应用分屏 一屏两用",price:"2699"},
    {id:23,images:"https://res6.vmallres.com/shopdc/pic/4c069ef8-48e8-47cc-b6cb-f9758df75c6b.jpg",sale:"预订优惠200",title:"移动路由5G CPE Pro",desc:"巴龙5000芯片 5G双模",price:"2499"},
    {id:24,images:"https://res3.vmallres.com/shopdc/pic/d5699ac8-ab59-443a-8d2d-8adbaa809f1c.jpg",sale:"预订立省30元",title:"华为手环4",desc:"USB即插即充 健康管理",price:"199"}
    ]
var gridFour = [
    {id:25,images:"https://res9.vmallres.com/pimages//product/6901443363667/428_428_4BD15480463D42B9320C9662596529FB35624E9AEB952EF4mp.png",sale:"限时直降400",title:"华为智慧屏 V75",desc:"影视游戏娱乐 精彩跃然屏上",price:"12599"},
    {id:26,images:"https://res8.vmallres.com/shopdc/pic/cb1123c5-5e41-46ce-85a2-e4b85c315e28.jpg",sale:"赠碎屏险|享12期免息",title:"P30 Pro",desc:"超感光徕卡四摄 随时随地记录美",price:"4458"},
    {id:27,images:"https://res6.vmallres.com/shopdc/pic/a217f399-a642-49ba-a529-5987acdf29df.jpg",sale:"3期免息+赠好礼",title:"华为平板 M6 高能版",desc:"旗舰性能 液冷散热 畅快游戏体验",price:"2499"},
    {id:28,images:"https://res2.vmallres.com/shopdc/pic/990c903e-e264-46f7-a15c-7cdb48492690.jpg",sale:"赠鼠标+3期免息",title:"MateBook D 15 锐龙版",desc:"高清全面屏 画面更具沉浸感",price:"3999"}
    ]
var gridFive = [
    {id:29,images:"https://res2.vmallres.com/shopdc/pic/ab3bd337-583e-4b59-b4b7-1e94971573a4.jpg",sale:"领券减100|赠好礼",title:"HUAWEI nova 5i",desc:"2400万AI四摄 自拍极点全面屏",price:"1799"},
    {id:30,images:"https://res2.vmallres.com/shopdc/pic/cad18755-4d33-4698-9861-9c336ff5d1b7.jpg",sale:"3期免息+赠好礼",title:"华为平板 M6 8.4英寸",desc:"高效便捷的学习体验",price:"2199"},
    {id:31,images:"https://res1.vmallres.com/shopdc/pic/c85699e9-4da9-4ce4-8667-36af17c2406c.jpg",sale:"享3期免息",title:"华为儿童手表 3 Pro",desc:"全网通学生电话手表 学习小伙伴",price:"798"},
    {id:32,images:"https://res3.vmallres.com/shopdc/pic/8e3a217d-30a2-453f-8930-0716b58fbb55.jpg",sale:"享3期免息",title:"华为AI音箱",desc:"丹拿音质 随时为孩子答疑解惑",price:"399"},
    {id:33,images:"https://res0.vmallres.com/shopdc/pic/5812d130-be92-4474-bac6-5fc64c018e8b.jpg",sale:"享3期免息",title:"华为儿童手表 3",desc:"精准定位 清晰通话 拍照分享",price:"398"},
    {id:34,images:"https://res7.vmallres.com/shopdc/pic/d14e0fe4-6d3a-4b18-be02-40d4b1393c31.jpg",sale:"购机享3期免息",title:"平板 M5 青春版 10.1英寸",desc:"丰富学习内容 成长好伙伴",price:"1999"},
    {id:35,images:"https://res3.vmallres.com/shopdc/pic/3e5ae9bb-9635-402a-bd1f-f4801942060f.jpg",sale:"享3期免息",title:"华为5G随行WiFi",desc:"5G双模全网通 强劲续航",price:"1699"},
    {id:36,images:"https://res3.vmallres.com/shopdc/pic/d5b0710e-0bb5-412f-8369-d5c4dfb160ed.jpg",sale:"限时直降11元",title:"欧普读写台灯",desc:"柔光爱眼 学习时间管理",price:"158"}
    ]
var gridSix = [
    {id:37,images:"https://res8.vmallres.com/shopdc/pic/d9cf7e9f-3d44-4d93-bb7f-632c47edeeda.jpg",sale:"领券减100",title:"HUAWEI nova 5i Pro",desc:"极点全面屏 超广角4800万AI四摄",price:"2099"},
    {id:38,images:"https://res8.vmallres.com/shopdc/pic/bf1c6e23-ab54-44d5-a094-a4ee8069f7aa.jpg",sale:"最高领券减150",title:"华为畅享10",desc:"6.39英寸极点全面屏",price:"1099"},
    {id:39,images:"https://res4.vmallres.com/shopdc/pic/1d33f63c-3f38-47c5-86a6-34d461b40b11.jpg",sale:"限时优惠50元|享6期免息",title:"华为智能体脂秤 2 Pro",desc:"测量29项身体数据 更了解自己",price:"449"},
    {id:40,images:"https://res1.vmallres.com/shopdc/pic/5e64c618-b7e2-4f0e-a0e7-a21686bf78bf.jpg",sale:"直降1000+赠M-pen|12期免息",title:"HUAWEI Mate 20 X (5G)",desc:"5G双模全网通",price:"5199"},
    {id:41,images:"https://res7.vmallres.com/shopdc/pic/1bc88f05-16fc-462c-9bc5-d6fd3cf43425.jpg",sale:"最高领券减250",title:"华为畅享 10S",desc:"炫彩全面屏 强劲续航",price:"1599"},
    {id:42,images:"https://res8.vmallres.com/shopdc/pic/15f67c90-272e-4b4c-b25b-b1c144e12a64.jpg",sale:"享3期免息",title:"HUAWEI智能眼镜",desc:"兼具时尚科技 生活和沟通更便捷",price:"1999"},
    {id:43,images:"https://res4.vmallres.com/shopdc/pic/10608482-2c93-4a5d-85c9-a68ed1c508b3.jpg",sale:"限时直降30元",title:"720全效空气净化器",desc:"灭菌除醛 呵护每一次呼吸",price:"869"},
    {id:44,images:"https://res2.vmallres.com/shopdc/pic/28569490-535b-4fc9-ae99-13d66e9f1735.jpg",sale:"限时直降20元",title:"亚都智能加湿器",desc:"让加湿细腻温柔 让生活简单滋润",price:"279"}
    ]
var gridSeven = [
    {id:45,images:"https://res9.vmallres.com/shopdc/pic/1e465169-a093-4377-adbe-b2a6a3c7beca.jpg",sale:"享3期免息",title:"HUAWEI MateBook 14",desc:"2K全面屏轻薄性能笔记本",price:"5699"},
    {id:46,images:"https://res5.vmallres.com/shopdc/pic/5d12692f-f88f-4781-b466-a9a81399caf1.jpg",sale:"预订立省30元",title:"华为子母路由 Q2 Pro",desc:"千兆子母路由 大户型优选",price:"799"},
    {id:47,images:"https://res9.vmallres.com/shopdc/pic/3e2c5dd1-1568-400b-8151-5ede3e0f5dc7.jpg",sale:"领券优惠40元",title:"华为超级快充无线车充",desc:"一路快充 一路无忧",price:"299"},
    {id:48,images:"https://res0.vmallres.com/shopdc/pic/19bebb15-18d8-4659-80b9-d37f7ddb3c0f.jpg",sale:"享3期免息",title:"华为5G随行WiFi",desc:"5G双模全网通 强劲续航",price:"1699"},
    {id:49,images:"https://res2.vmallres.com/shopdc/pic/fb27dc37-41d5-473f-adad-4290684c0e79.jpg",sale:"享3期免息",title:"华为儿童手表 3X",desc:"九重AI定位 智能AI识物",price:"898"},
    {id:50,images:"https://res5.vmallres.com/shopdc/pic/747ce766-b604-405c-a19e-3895a7a27df7.jpg",sale:"享3期免息",title:"华为儿童手表 3s",desc:"腕上学习助手 智能语音助手",price:"598"},
    {id:51,images:"https://res4.vmallres.com/shopdc/pic/877c3f39-dfe2-4141-b9d3-61961185685c.jpg",sale:"享3期免息",title:"华为手环 B5",desc:"心率监测 睡眠分析 智能提醒",price:"999"},
    {id:52,images:"https://res4.vmallres.com/shopdc/pic/af3b4b9b-e49e-4032-bf91-cfb93c6f878d.jpg",sale:"预订立省30元",title:"华为手环4",desc:"健康管理 智能运动手环",price:"199"}
    ]
var gridEight = [
    {id:53,images:"https://res1.vmallres.com/shopdc/pic/bf9de525-736c-4ca4-8c5d-80ee7879dc29.jpg",sale:"享3期免息",title:"华为快充移动电源",desc:"18W双向快充",price:"99"},
    {id:54,images:"https://res0.vmallres.com/shopdc/pic/7f8dd5fe-0fd6-442d-8261-21535f265a59.jpg",sale:"领券优惠60元",title:"华为超级快充移动电源",desc:"双向40W超级快充 多协议兼容",price:"369"},
    {id:55,images:"https://res9.vmallres.com/shopdc/pic/624ec733-bb6c-49e4-9f4c-cbf7bb313ed9.jpg",sale:"限时优惠40元",title:"华为智能体脂秤 WiFi版",desc:"由内而外更懂你",price:"159"},
    {id:56,images:"https://res2.vmallres.com/shopdc/pic/0b461e91-4141-4135-9465-c40409107ef6.jpg",sale:"限时优惠70元",title:"华为智能体脂秤",desc:"关注你的每一克",price:"99"},
    {id:57,images:"https://res6.vmallres.com/shopdc/pic/11e86637-9814-4551-927d-bd638d8048c0.jpg",sale:"领券优惠30元",title:"华为充电器快充版",desc:"Max 40W",price:"159"},
    {id:58,images:"https://res7.vmallres.com/shopdc/pic/b6484d22-eae4-4122-b660-f7164fc4ee97.jpg",sale:"领券优惠60元",title:"灵眸手机云台3 套装版",desc:"一拍即合 释放影像力",price:"799"},
    {id:59,images:"https://res8.vmallres.com/shopdc/pic/0b819370-3bfc-4661-a899-f4f3fb0be7a9.jpg",sale:"限时优惠40元",title:"华为mini蓝牙音箱",desc:"小巧便携 低音浑厚",price:"129"},
    {id:60,images:"https://res3.vmallres.com/shopdc/pic/1d943e10-f93d-464c-9b89-c37d1494adb3.jpg",sale:"领券优惠30元",title:"华为AI音箱mini",desc:"有问必答 家居控制",price:"229"}
    ]

var gridAll = [
    {id:1,images:"https://res3.vmallres.com/shopdc/pic/64c28d97-c414-4ab4-9353-16419a8d16f1.jpg",sale:"直降200元 | 现货",title:"HUAWEI nova 5z",desc:"4800万AI四摄 3200万人像超级夜景",price:"1399"},
        {id:2,images:"https://res2.vmallres.com/shopdc/pic/24197022-054d-4cdd-848b-8b4bb48cdc20.jpg",sale:"领券减100|最高24期免息",title:"HUAWEI nova 6 5G",desc:"前置3200万像素自动对焦",price:"3799"},
        {id:3,images:"https://res8.vmallres.com/shopdc/pic/dc898aa8-6549-44cc-97a9-cf135fc9885f.jpg",sale:"领券减100",title:"HUAWEI nova 5 Pro",desc:"4800万AI四摄",price:"2499"},
        {id:4,images:"https://res8.vmallres.com/shopdc/pic/a2353c49-8904-4d1f-9c9d-d5b72af8a4f2.png",sale:"赠碎屏险|享12期免息",title:"HUAWEI P30",desc:"麒麟980 超感光徕卡三摄",price:"3358"},
        {id:5,images:"https://res2.vmallres.com/shopdc/pic/ebdee9c9-fc87-4d22-b67f-ddeec31d875f.jpg",sale:"提前预订立省400",title:"华为智慧屏",desc:"鸿鹄芯片 智能家居控制",price:"6999"},
        {id:6,images:"https://res3.vmallres.com/pimages//product/6901443297955/428_428_1556004123894mp.png",sale:"预订最高省200",title:"MateBook X Pro 2019款",desc:"3K全面屏轻薄笔记本",price:"7999"},
        {id:7,images:"https://res3.vmallres.com/shopdc/pic/8d506ce2-d255-409f-9259-1ca6c4eedf9c.jpg",sale:"稀缺货源 限量预订",title:"HUAWEI MatePad Pro",desc:"麒麟990芯片 多屏协同",price:"3299"},
        {id:8,images:"https://res1.vmallres.com/shopdc/pic/78e18c94-21c8-4da7-ae87-406db52b6d9b.jpg",sale:"预订最高省50元",title:"HUAWEI WATCH GT 2",desc:"麒麟A1芯片 强劲续航",price:"1388"},
        {id:9,images:"https://res9.vmallres.com/shopdc/pic/56dae36f-062d-41ef-a21d-419252fdf2dc.png",sale:"预订优惠100元",title:"FreeBuds 3 无线耳机",desc:"半开放式主动降噪",price:"1199"},
        {id:10,images:"https://res9.vmallres.com/shopdc/pic/fb9be468-7837-4aca-ab9f-9de934aa51b6.jpg",sale:"预订最高省400",title:"Sound X 智能音箱",desc:"帝瓦雷60W双低音炮",price:"1999"},
        {id:11,images:"https://res9.vmallres.com/pimages//product/6901443367184/428_428_602BF194C889E3294A39E798EF0D70DDBCEDB2E5A115A594mp.png",sale:"预订最高省200",title:"MateBook 13",desc:"2K全面屏",price:"4699"},
        {id:12,images:"https://res5.vmallres.com/pimages//product/6901443295951/428_428_1554964968160mp.png",sale:"预订优惠100元",title:"FreeLace 无线耳机",desc:"华为闪连快充技术 18小时长续航",price:"499"},
        {id:13,images:"https://res7.vmallres.com/pimages//product/6901443325214/428_428_B4B231BE557D9DC5AA9627749F0846ECD3DCE76D2A7F881Fmp.png",sale:"预订优惠40元",title:"华为超级快充无线充电器",desc:"27W大功率 Qi协议兼容",price:"199"},
        {id:14,images:"https://res2.vmallres.com/pimages//product/6901443362950/428_428_70FC8430832764C36DDB66C752A310DDF07511784B2396C1mp.png",sale:"预订优惠200元",title:"HUAWEI VR Glass",desc:"IMAX巨幕体验 支持手机投屏",price:"2999"},
        {id:15,images:"https://res4.vmallres.com/shopdc/pic/de2d4e23-1e10-4086-b536-414a51c704b3.jpg",sale:"预订最高省100元",title:"HUAWEI WATCH GT",desc:"NFC支付 实时心率 精准定位",price:"1088"},
        {id:16,images:"https://res4.vmallres.com/shopdc/pic/e20fee00-9ba8-49dc-95b6-ec941da46e38.jpg",sale:"预订立省40元",title:"华为手环 4 Pro",desc:"健康管理 专业运动指导",price:"399"},
        {id:17,images:"https://res4.vmallres.com/shopdc/pic/1fa48ff7-6ebc-493a-8d8b-70a17edc3580.jpg",sale:"最高领券减150",title:"华为畅享10 Plus",desc:"6.59英寸全视屏",price:"1399"},
        {id:18,images:"https://res1.vmallres.com/shopdc/pic/b4550dbc-a8d8-468d-bf63-618c7997c04c.jpg",sale:"赠好礼|享6期免息",title:"nova 6 SE",desc:"4800万AI四摄 自拍大不一样",price:"2199"},
        {id:19,images:"https://res8.vmallres.com/shopdc/pic/f05256aa-9efb-47c9-af4c-84d3b933b61d.jpg",sale:"赠扩展坞+3期免息",title:"MateBook 13 2020款",desc:"多屏协同 办公更便捷",price:"5999"},
        {id:20,images:"https://res0.vmallres.com/pimages//product/6901443366880/428_428_7CB5C12188355DCF11E7ECF8BADBE6CFFEC9B4912C085CD0mp.png",sale:"赠鼠标+3期免息",title:"MateBook D 14",desc:"轻薄灵动 长效续航 工作从容应对",price:"3999"},
        {id:21,images:"https://res2.vmallres.com/pimages//product/6901443364701/428_428_6779925E0ED35A85655C3E9B6B6BA65F1652C5FE3FBA3E28mp.png",sale:"赠蓝牙鼠标+3期免息",title:"MateBook 14 2020款",desc:"2K全面屏 多点触控",price:"5899"},
        {id:22,images:"https://res8.vmallres.com/shopdc/pic/3ae3ce77-3c9f-4fa4-b312-732c0f26d004.jpg",sale:"部分版本限量预订",title:"平板 M6 10.8英寸",desc:"应用分屏 一屏两用",price:"2699"},
        {id:23,images:"https://res6.vmallres.com/shopdc/pic/4c069ef8-48e8-47cc-b6cb-f9758df75c6b.jpg",sale:"预订优惠200",title:"移动路由5G CPE Pro",desc:"巴龙5000芯片 5G双模",price:"2499"},
        {id:24,images:"https://res3.vmallres.com/shopdc/pic/d5699ac8-ab59-443a-8d2d-8adbaa809f1c.jpg",sale:"预订立省30元",title:"华为手环4",desc:"USB即插即充 健康管理",price:"199"},
        {id:25,images:"https://res9.vmallres.com/pimages//product/6901443363667/428_428_4BD15480463D42B9320C9662596529FB35624E9AEB952EF4mp.png",sale:"限时直降400",title:"华为智慧屏 V75",desc:"影视游戏娱乐 精彩跃然屏上",price:"12599"},
        {id:26,images:"https://res8.vmallres.com/shopdc/pic/cb1123c5-5e41-46ce-85a2-e4b85c315e28.jpg",sale:"赠碎屏险|享12期免息",title:"P30 Pro",desc:"超感光徕卡四摄 随时随地记录美",price:"4458"},
        {id:27,images:"https://res6.vmallres.com/shopdc/pic/a217f399-a642-49ba-a529-5987acdf29df.jpg",sale:"3期免息+赠好礼",title:"华为平板 M6 高能版",desc:"旗舰性能 液冷散热 畅快游戏体验",price:"2499"},
        {id:28,images:"https://res2.vmallres.com/shopdc/pic/990c903e-e264-46f7-a15c-7cdb48492690.jpg",sale:"赠鼠标+3期免息",title:"MateBook D 15 锐龙版",desc:"高清全面屏 画面更具沉浸感",price:"3999"},
        {id:29,images:"https://res2.vmallres.com/shopdc/pic/ab3bd337-583e-4b59-b4b7-1e94971573a4.jpg",sale:"领券减100|赠好礼",title:"HUAWEI nova 5i",desc:"2400万AI四摄 自拍极点全面屏",price:"1799"},
        {id:30,images:"https://res2.vmallres.com/shopdc/pic/cad18755-4d33-4698-9861-9c336ff5d1b7.jpg",sale:"3期免息+赠好礼",title:"华为平板 M6 8.4英寸",desc:"高效便捷的学习体验",price:"2199"},
        {id:31,images:"https://res1.vmallres.com/shopdc/pic/c85699e9-4da9-4ce4-8667-36af17c2406c.jpg",sale:"享3期免息",title:"华为儿童手表 3 Pro",desc:"全网通学生电话手表 学习小伙伴",price:"798"},
        {id:32,images:"https://res3.vmallres.com/shopdc/pic/8e3a217d-30a2-453f-8930-0716b58fbb55.jpg",sale:"享3期免息",title:"华为AI音箱",desc:"丹拿音质 随时为孩子答疑解惑",price:"399"},
        {id:33,images:"https://res0.vmallres.com/shopdc/pic/5812d130-be92-4474-bac6-5fc64c018e8b.jpg",sale:"享3期免息",title:"华为儿童手表 3",desc:"精准定位 清晰通话 拍照分享",price:"398"},
        {id:34,images:"https://res7.vmallres.com/shopdc/pic/d14e0fe4-6d3a-4b18-be02-40d4b1393c31.jpg",sale:"购机享3期免息",title:"平板 M5 青春版 10.1英寸",desc:"丰富学习内容 成长好伙伴",price:"1999"},
        {id:35,images:"https://res3.vmallres.com/shopdc/pic/3e5ae9bb-9635-402a-bd1f-f4801942060f.jpg",sale:"享3期免息",title:"华为5G随行WiFi",desc:"5G双模全网通 强劲续航",price:"1699"},
        {id:36,images:"https://res3.vmallres.com/shopdc/pic/d5b0710e-0bb5-412f-8369-d5c4dfb160ed.jpg",sale:"限时直降11元",title:"欧普读写台灯",desc:"柔光爱眼 学习时间管理",price:"158"},
        {id:37,images:"https://res8.vmallres.com/shopdc/pic/d9cf7e9f-3d44-4d93-bb7f-632c47edeeda.jpg",sale:"领券减100",title:"HUAWEI nova 5i Pro",desc:"极点全面屏 超广角4800万AI四摄",price:"2099"},
        {id:38,images:"https://res8.vmallres.com/shopdc/pic/bf1c6e23-ab54-44d5-a094-a4ee8069f7aa.jpg",sale:"最高领券减150",title:"华为畅享10",desc:"6.39英寸极点全面屏",price:"1099"},
        {id:39,images:"https://res4.vmallres.com/shopdc/pic/1d33f63c-3f38-47c5-86a6-34d461b40b11.jpg",sale:"限时优惠50元|享6期免息",title:"华为智能体脂秤 2 Pro",desc:"测量29项身体数据 更了解自己",price:"449"},
        {id:40,images:"https://res1.vmallres.com/shopdc/pic/5e64c618-b7e2-4f0e-a0e7-a21686bf78bf.jpg",sale:"直降1000+赠M-pen|12期免息",title:"HUAWEI Mate 20 X (5G)",desc:"5G双模全网通",price:"5199"},
        {id:41,images:"https://res7.vmallres.com/shopdc/pic/1bc88f05-16fc-462c-9bc5-d6fd3cf43425.jpg",sale:"最高领券减250",title:"华为畅享 10S",desc:"炫彩全面屏 强劲续航",price:"1599"},
        {id:42,images:"https://res8.vmallres.com/shopdc/pic/15f67c90-272e-4b4c-b25b-b1c144e12a64.jpg",sale:"享3期免息",title:"HUAWEI智能眼镜",desc:"兼具时尚科技 生活和沟通更便捷",price:"1999"},
        {id:43,images:"https://res4.vmallres.com/shopdc/pic/10608482-2c93-4a5d-85c9-a68ed1c508b3.jpg",sale:"限时直降30元",title:"720全效空气净化器",desc:"灭菌除醛 呵护每一次呼吸",price:"869"},
        {id:44,images:"https://res2.vmallres.com/shopdc/pic/28569490-535b-4fc9-ae99-13d66e9f1735.jpg",sale:"限时直降20元",title:"亚都智能加湿器",desc:"让加湿细腻温柔 让生活简单滋润",price:"279"},
        {id:45,images:"https://res9.vmallres.com/shopdc/pic/1e465169-a093-4377-adbe-b2a6a3c7beca.jpg",sale:"享3期免息",title:"HUAWEI MateBook 14",desc:"2K全面屏轻薄性能笔记本",price:"5699"},
        {id:46,images:"https://res5.vmallres.com/shopdc/pic/5d12692f-f88f-4781-b466-a9a81399caf1.jpg",sale:"预订立省30元",title:"华为子母路由 Q2 Pro",desc:"千兆子母路由 大户型优选",price:"799"},
        {id:47,images:"https://res9.vmallres.com/shopdc/pic/3e2c5dd1-1568-400b-8151-5ede3e0f5dc7.jpg",sale:"领券优惠40元",title:"华为超级快充无线车充",desc:"一路快充 一路无忧",price:"299"},
        {id:48,images:"https://res0.vmallres.com/shopdc/pic/19bebb15-18d8-4659-80b9-d37f7ddb3c0f.jpg",sale:"享3期免息",title:"华为5G随行WiFi",desc:"5G双模全网通 强劲续航",price:"1699"},
        {id:49,images:"https://res2.vmallres.com/shopdc/pic/fb27dc37-41d5-473f-adad-4290684c0e79.jpg",sale:"享3期免息",title:"华为儿童手表 3X",desc:"九重AI定位 智能AI识物",price:"898"},
        {id:50,images:"https://res5.vmallres.com/shopdc/pic/747ce766-b604-405c-a19e-3895a7a27df7.jpg",sale:"享3期免息",title:"华为儿童手表 3s",desc:"腕上学习助手 智能语音助手",price:"598"},
        {id:51,images:"https://res4.vmallres.com/shopdc/pic/877c3f39-dfe2-4141-b9d3-61961185685c.jpg",sale:"享3期免息",title:"华为手环 B5",desc:"心率监测 睡眠分析 智能提醒",price:"999"},
        {id:52,images:"https://res4.vmallres.com/shopdc/pic/af3b4b9b-e49e-4032-bf91-cfb93c6f878d.jpg",sale:"预订立省30元",title:"华为手环4",desc:"健康管理 智能运动手环",price:"199"},
        {id:53,images:"https://res1.vmallres.com/shopdc/pic/bf9de525-736c-4ca4-8c5d-80ee7879dc29.jpg",sale:"享3期免息",title:"华为快充移动电源",desc:"18W双向快充",price:"99"},
        {id:54,images:"https://res0.vmallres.com/shopdc/pic/7f8dd5fe-0fd6-442d-8261-21535f265a59.jpg",sale:"领券优惠60元",title:"华为超级快充移动电源",desc:"双向40W超级快充 多协议兼容",price:"369"},
        {id:55,images:"https://res9.vmallres.com/shopdc/pic/624ec733-bb6c-49e4-9f4c-cbf7bb313ed9.jpg",sale:"限时优惠40元",title:"华为智能体脂秤 WiFi版",desc:"由内而外更懂你",price:"159"},
        {id:56,images:"https://res2.vmallres.com/shopdc/pic/0b461e91-4141-4135-9465-c40409107ef6.jpg",sale:"限时优惠70元",title:"华为智能体脂秤",desc:"关注你的每一克",price:"99"},
        {id:57,images:"https://res6.vmallres.com/shopdc/pic/11e86637-9814-4551-927d-bd638d8048c0.jpg",sale:"领券优惠30元",title:"华为充电器快充版",desc:"Max 40W",price:"159"},
        {id:58,images:"https://res7.vmallres.com/shopdc/pic/b6484d22-eae4-4122-b660-f7164fc4ee97.jpg",sale:"领券优惠60元",title:"灵眸手机云台3 套装版",desc:"一拍即合 释放影像力",price:"799"},
        {id:59,images:"https://res8.vmallres.com/shopdc/pic/0b819370-3bfc-4661-a899-f4f3fb0be7a9.jpg",sale:"限时优惠40元",title:"华为mini蓝牙音箱",desc:"小巧便携 低音浑厚",price:"129"},
        {id:60,images:"https://res3.vmallres.com/shopdc/pic/1d943e10-f93d-464c-9b89-c37d1494adb3.jpg",sale:"领券优惠30元",title:"华为AI音箱mini",desc:"有问必答 家居控制",price:"229"}
]

var service = [
{title:"购物相关",desc:["购物指南","配送方式","支付方式","常见问题"]},
{title:"保修与退换货",desc:["保修政策","退换货政策","退换货流程","保修状态查询","配件防伪查询"]},
{title:"维修与技术支持",desc:["售后网点","预约维修","手机寄修","备件价格查询","上门服务"]},
{title:"特色服务",desc:["售后网点","预约维修","手机寄修","备件价格查询","上门服务"]},
{title:"关于我们",desc:["公司介绍","华为商城简介","华为零售店","荣耀零售店","诚征英才","意见反馈"]},
{title:"友情链接",desc:["华为集团","华为CBG官网","荣耀官网","花粉俱乐部","网站地图"]},
]

var warrant_one = ["华为集团 ","华为CBG官网 ","荣耀官网 ","花粉俱乐部 ","华为应用市场 ","EMUI ","华为终端云空间 ","开发者联盟 ","华为商城手机版 ","网站地图 "]

var warrant_two = ["隐私声明","服务协议 ","COOKIES","Copyright © 2012-2019 华为软件技术有限公司 版权所有 保留一切权利 ","公安备案 苏公网安备32011402010009号 ","苏ICP备17040376号-6 ","增值电信业务经营许可证：苏B2-20130048号 ","|"," 网络文化经营许可证：苏网文[2015] 1599-026号 ","|"," 备案主体编号：44201919072182 "]