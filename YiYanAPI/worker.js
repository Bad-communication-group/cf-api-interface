// 定义一言数据
const yiyan = [
  {
    "content": "生活是一场美丽的意外，珍惜每一天的阳光。",
    "author": "xby",
    "serial_number": 1,
    "interpretation": "生活充满未知和惊喜，要用心感受每一天的美好"
  },
  {
    "content": "梦想是指引前行的灯塔，永不熄灭。",
    "author": "xby",
    "serial_number": 2,
    "interpretation": "梦想为我们提供方向和动力，让我们不断追求目标"
  },
  {
    "content": "失败是成功的垫脚石，勇往直前。",
    "author": "xby",
    "serial_number": 3,
    "interpretation": "经历失败并不可怕，它是通往成功的必经之路"
  },
  {
    "content": "知识改变命运，学习成就未来。",
    "author": "xby",
    "serial_number": 4,
    "interpretation": "通过不断学习获取知识，能够改变人生轨迹"
  },
  {
    "content": "坚持就是胜利，永不放弃。",
    "author": "xby",
    "serial_number": 5,
    "interpretation": "坚持不懈地努力，最终会取得成功"
  },
  {
    "content": "微笑面对生活，乐观迎接挑战。",
    "author": "xby",
    "serial_number": 6,
    "interpretation": "保持积极心态，用微笑和乐观态度面对困难"
  },
  {
    "content": "友谊是心灵的桥梁，连接彼此。",
    "author": "xby",
    "serial_number": 7,
    "interpretation": "真正的友谊能够拉近人与人之间的距离"
  },
  {
    "content": "爱是世界上最伟大的力量，温暖人心。",
    "author": "xby",
    "serial_number": 8,
    "interpretation": "爱能够给人带来温暖和力量，影响深远"
  },
  {
    "content": "时间是公平的，珍惜每一刻。",
    "author": "xby",
    "serial_number": 9,
    "interpretation": "时间对每个人都一样，要合理利用不浪费"
  },
  {
    "content": "健康是幸福的基础，爱护身体。",
    "author": "xby",
    "serial_number": 10,
    "interpretation": "拥有健康的身体才能更好地享受生活"
  },
  {
    "content": "阅读开启智慧之门，拓宽视野。",
    "author": "xby",
    "serial_number": 11,
    "interpretation": "通过阅读获取知识，提升自身素养和见识"
  },
  {
    "content": "创新引领未来，敢于突破。",
    "author": "xby",
    "serial_number": 12,
    "interpretation": "不断创新才能推动社会进步和发展"
  },
  {
    "content": "自然之美无处不在，用心感受。",
    "author": "xby",
    "serial_number": 13,
    "interpretation": "大自然充满美妙景色，值得我们去欣赏"
  },
  {
    "content": "感恩之心常伴，幸福自来。",
    "author": "xby",
    "serial_number": 14,
    "interpretation": "怀有感恩之心能让我们更珍惜拥有，获得幸福"
  },
  {
    "content": "团队合作力量大，携手共进。",
    "author": "xby",
    "serial_number": 15,
    "interpretation": "团结协作能发挥更大效能，共同达成目标"
  },
  {
    "content": "挫折是成长的阶梯，越挫越勇。",
    "author": "xby",
    "serial_number": 16,
    "interpretation": "经历挫折有助于我们成长和变得坚强"
  },
  {
    "content": "真诚待人，收获真心朋友。",
    "author": "xby",
    "serial_number": 17,
    "interpretation": "以真诚态度与人交往，才能获得真挚友谊"
  },
  {
    "content": "目标明确，行动才有方向。",
    "author": "xby",
    "serial_number": 18,
    "interpretation": "明确的目标为行动提供指引，避免盲目"
  },
  {
    "content": "细节决定成败，注重每一个环节。",
    "author": "xby",
    "serial_number": 19,
    "interpretation": "关注细节往往能决定事情的最终成败"
  },
  {
    "content": "分享快乐，传递温暖。",
    "author": "xby",
    "serial_number": 20,
    "interpretation": "与他人分享快乐能让温暖在人群中传递"
  },
  {
    "content": "逆境是成长的必经之路，勇往直前。",
    "author": "xby",
    "serial_number": 21,
    "interpretation": "经历逆境是成长过程中不可避免的部分"
  },
  {
    "content": "相信自己，你能行！",
    "author": "xby",
    "serial_number": 22,
    "interpretation": "自信是成功的关键，相信自己的能力"
  },
  {
    "content": "行动胜于空谈，去做才有可能。",
    "author": "xby",
    "serial_number": 23,
    "interpretation": "只有付诸行动，才有可能实现目标"
  },
  {
    "content": "保持好奇心，探索未知世界。",
    "author": "xby",
    "serial_number": 24,
    "interpretation": "好奇心驱使我们去探索和发现新事物"
  },
  {
    "content": "平衡生活与工作，享受人生。",
    "author": "xby",
    "serial_number": 25,
    "interpretation": "合理安排时间和精力，兼顾生活与工作"
  },
  {
    "content": "尊重他人，就是尊重自己。",
    "author": "xby",
    "serial_number": 26,
    "interpretation": "以尊重态度对待他人，也能赢得他人尊重"
  },
  {
    "content": "积极心态能改变一切，乐观面对。",
    "author": "xby",
    "serial_number": 27,
    "interpretation": "保持积极乐观的心态有助于解决问题"
  },
  {
    "content": "不断学习，与时俱进。",
    "author": "xby",
    "serial_number": 28,
    "interpretation": "持续学习新知识技能，才能跟上时代步伐"
  },
  {
    "content": "简单生活，快乐无限。",
    "author": "xby",
    "serial_number": 29,
    "interpretation": "追求简单的生活方式，能获得更多快乐"
  },
  {
    "content": "宽容待人，化解矛盾。",
    "author": "xby",
    "serial_number": 30,
    "interpretation": "以宽容心态对待他人，能减少冲突和矛盾"
  },
  {
    "content": "热爱生活，拥抱每一天。",
    "author": "xby",
    "serial_number": 31,
    "interpretation": "对生活充满热爱，积极拥抱每个日子"
  },
  {
    "content": "自律是成功的基石，坚持自我管理。",
    "author": "xby",
    "serial_number": 32,
    "interpretation": "良好的自律能力为成功奠定基础"
  },
  {
    "content": "倾听他人，理解不同观点。",
    "author": "xby",
    "serial_number": 33,
    "interpretation": "认真倾听他人意见，能拓宽自己的视野"
  },
  {
    "content": "坚持自己的梦想，不被他人左右。",
    "author": "xby",
    "serial_number": 34,
    "interpretation": "坚定地追求自己的梦想，不受外界干扰"
  },
  {
    "content": "适应变化，灵活应对挑战。",
    "author": "xby",
    "serial_number": 35,
    "interpretation": "具备适应变化的能力，能更好地面对挑战"
  },
  {
    "content": "珍惜身边人，友情长存。",
    "author": "xby",
    "serial_number": 36,
    "interpretation": "重视身边的朋友和亲人，维系长久友谊"
  },
  {
    "content": "用爱浇灌希望，让世界更美好。",
    "author": "xby",
    "serial_number": 37,
    "interpretation": "以爱为动力去实现希望，改善世界"
  },
  {
    "content": "勇敢追求梦想，不惧困难。",
    "author": "xby",
    "serial_number": 38,
    "interpretation": "大胆地去追逐梦想，不怕遇到困难"
  },
  {
    "content": "保持童心，发现生活乐趣。",
    "author": "xby",
    "serial_number": 39,
    "interpretation": "保留一颗童心，能更容易发现生活中的乐趣"
  },
  {
    "content": "努力工作，享受生活，找到平衡点。",
    "author": "xby",
    "serial_number": 40,
    "interpretation": "在工作和生活之间找到合适的平衡"
  },
  {
    "content": "善良是人性中最美的光辉。",
    "author": "xby",
    "serial_number": 41,
    "interpretation": "善良品质能展现人性中最美好的一面"
  },
  {
    "content": "相信过程，收获结果。",
    "author": "xby",
    "serial_number": 42,
    "interpretation": "专注于过程的付出，最终会得到相应结果"
  },
  {
    "content": "每天进步一点点，积累成飞跃。",
    "author": "xby",
    "serial_number": 43,
    "interpretation": "日积月累的小进步，最终会带来大的跨越"
  },
  {
    "content": "选择积极的环境，塑造更好的自己。",
    "author": "xby",
    "serial_number": 44,
    "interpretation": "良好的环境对个人成长和发展有积极影响"
  },
  {
    "content": "用行动证明自己，而不是空话。",
    "author": "xby",
    "serial_number": 45,
    "interpretation": "通过实际行动展示能力，而非仅仅说说"
  },
  {
    "content": "保持开放心态，接纳新事物。",
    "author": "xby",
    "serial_number": 46,
    "interpretation": "愿意接受新事物，有助于个人成长和进步"
  },
  {
    "content": "专注于自己能控制的事情，减少焦虑。",
    "author": "xby",
    "serial_number": 47,
    "interpretation": "将精力放在自己可以掌控的事情上，减轻焦虑"
  },
  {
    "content": "分享知识，共同进步。",
    "author": "xby",
    "serial_number": 48,
    "interpretation": "与他人分享知识，能促进共同成长"
  },
  {
    "content": "失败不可怕，放弃才可怕。",
    "author": "xby",
    "serial_number": 49,
    "interpretation": "面对失败不要害怕，放弃才是真正的可怕"
  },
  {
    "content": "相信自己，你能超越极限。",
    "author": "xby",
    "serial_number": 50,
    "interpretation": "对自己有信心，突破自己的极限"
  },
  {
    "content": "用智慧解决问题，而不是情绪。",
    "author": "xby",
    "serial_number": 51,
    "interpretation": "以理性智慧方式处理问题，避免情绪化"
  },
  {
    "content": "每天给自己一个微笑，开启美好一天。",
    "author": "xby",
    "serial_number": 52,
    "interpretation": "以微笑开始一天，能带来好心情和积极状态"
  },
  {
    "content": "健康的身体是革命的本钱，锻炼身体。",
    "author": "xby",
    "serial_number": 53,
    "interpretation": "拥有健康身体才能更好地进行革命工作"
  },
  {
    "content": "用欣赏的眼光看待他人，发现优点。",
    "author": "xby",
    "serial_number": 54,
    "interpretation": "以欣赏态度看待他人，能发现他们的闪光点"
  },
  {
    "content": "保持学习的热情，永不满足。",
    "author": "xby",
    "serial_number": 55,
    "interpretation": "持续保持对学习的热情，不断追求进步"
  },
  {
    "content": "用感恩的心面对生活，幸福自来。",
    "author": "xby",
    "serial_number": 56,
    "interpretation": "怀着感恩之心生活，能自然获得幸福"
  },
  {
    "content": "相信未来，充满希望。",
    "author": "xby",
    "serial_number": 57,
    "interpretation": "对未来看法充满信心和希望"
  },
  {
    "content": "用爱温暖他人，让世界更美好。",
    "author": "xby",
    "serial_number": 58,
    "interpretation": "以爱去温暖他人，共同创造美好世界"
  },
  {
    "content": "每天进步一点点，成就更好的自己。",
    "author": "xby",
    "serial_number": 59,
    "interpretation": "日积月累的小进步，塑造更优秀的自己"
  },
  {
    "content": "用智慧和勇气面对生活的挑战。",
    "author": "xby",
    "serial_number": 60,
    "interpretation": "凭借智慧和勇气去应对生活中的各种挑战"
  },
  {
    "content": "相信自己，你能创造奇迹。",
    "author": "xby",
    "serial_number": 61,
    "interpretation": "对自己有信心，相信自己能创造奇迹"
  },
  {
    "content": "用行动传递爱心，温暖人间。",
    "author": "xby",
    "serial_number": 62,
    "interpretation": "通过实际行动去传递爱心，让世界充满温暖"
  },
  {
    "content": "每天给自己一个梦想，让生活充满动力。",
    "author": "xby",
    "serial_number": 63,
    "interpretation": "每天设定一个小梦想，为生活注入动力"
  },
  {
    "content": "用坚持和努力实现自己的目标。",
    "author": "xby",
    "serial_number": 64,
    "interpretation": "通过坚持不懈的努力去达成既定目标"
  },
  {
    "content": "相信自己，你能战胜一切困难。",
    "author": "xby",
    "serial_number": 65,
    "interpretation": "对自己有信心，相信自己能克服所有困难"
  },
  {
    "content": "用微笑面对生活的风雨，迎接彩虹。",
    "author": "xby",
    "serial_number": 66,
    "interpretation": "以微笑态度面对生活中的挫折，迎接美好未来"
  },
  {
    "content": "每天学习一点点，积累成智慧。",
    "author": "xby",
    "serial_number": 67,
    "interpretation": "每天学习一点知识，日积月累成为智慧"
  },
  {
    "content": "用爱心和耐心对待身边的人。",
    "author": "xby",
    "serial_number": 68,
    "interpretation": "以爱和耐心去对待周围的人，增进关系"
  },
  {
    "content": "相信自己，你能成为生活的主人。",
    "author": "xby",
    "serial_number": 69,
    "interpretation": "对自己有信心，掌控自己的生活"
  },
  {
    "content": "用智慧和勇气书写自己的人生篇章。",
    "author": "xby",
    "serial_number": 70,
    "interpretation": "凭借智慧和勇气去创造属于自己的人生"
  },
  {
    "content": "每天给自己一个希望，让生活充满阳光。",
    "author": "xby",
    "serial_number": 71,
    "interpretation": "每天怀揣希望，让生活充满光明和温暖"
  },
  {
    "content": "用坚持和努力创造属于自己的辉煌。",
    "author": "xby",
    "serial_number": 72,
    "interpretation": "通过不懈努力和坚持，实现自己的辉煌成就"
  },
  {
    "content": "相信自己，你能超越自我，达到新的高度。",
    "author": "xby",
    "serial_number": 73,
    "interpretation": "对自己有信心，突破自我，实现更高目标"
  },
  {
    "content": "用微笑和乐观面对生活的起伏，迎接美好明天。",
    "author": "xby",
    "serial_number": 74,
    "interpretation": "以微笑和乐观态度面对生活中的波折，迎接更好的未来"
  },
  {
    "content": "每天进步一点点，让优秀成为一种习惯。",
    "author": "xby",
    "serial_number": 75,
    "interpretation": "日积月累的小进步，使优秀成为自然而然的习惯"
  },
  {
    "content": "用爱心和关怀让世界变得更美好。",
    "author": "xby",
    "serial_number": 76,
    "interpretation": "通过爱和关怀去改善世界，使其更加美好"
  },
  {
    "content": "相信自己，你能战胜内心的恐惧，勇往直前。",
    "author": "xby",
    "serial_number": 77,
    "interpretation": "对自己有信心，克服内心的恐惧，不断前进"
  },
  {
    "content": "用智慧和汗水浇灌梦想之花，让它绽放。",
    "author": "xby",
    "serial_number": 78,
    "interpretation": "凭借智慧和努力去实现梦想，使其开花结果"
  },
  {
    "content": "每天给自己一个目标，让生活更有方向。",
    "author": "xby",
    "serial_number": 79,
    "interpretation": "每天设定一个小目标，使生活更有目的性和方向感"
  },
  {
    "content": "用坚持和信念走过黑暗，迎来黎明。",
    "author": "xby",
    "serial_number": 80,
    "interpretation": "凭借坚持和信念度过艰难时刻，迎来光明"
  },
  {
    "content": "相信自己，你能创造属于自己的奇迹。",
    "author": "xby",
    "serial_number": 81,
    "interpretation": "对自己有信心，相信自己能创造独特的奇迹"
  },
  {
    "content": "用微笑和温暖感染身边的人，传递正能量。",
    "author": "xby",
    "serial_number": 82,
    "interpretation": "以微笑和温暖去影响周围的人，传递积极能量"
  },
  {
    "content": "每天学习新知识，让智慧之树常青。",
    "author": "xby",
    "serial_number": 83,
    "interpretation": "每天获取新知识，使自己的智慧持续增长"
  },
  {
    "content": "用爱心和耐心对待生活中的每一件事。",
    "author": "xby",
    "serial_number": 84,
    "interpretation": "以爱和耐心去处理生活中的各种事务"
  },
  {
    "content": "相信自己，你能成为自己想成为的人。",
    "author": "xby",
    "serial_number": 85,
    "interpretation": "对自己有信心，相信自己能实现人生理想"
  },
  {
    "content": "用智慧和勇气面对生活的挑战，创造美好未来。",
    "author": "xby",
    "serial_number": 86,
    "interpretation": "凭借智慧和勇气去应对挑战，打造美好的明天"
  },
  {
    "content": "每天给自己一个微笑，让心情更加灿烂。",
    "author": "xby",
    "serial_number": 87,
    "interpretation": "每天对自己微笑，让心情更加明亮和愉快"
  },
  {
    "content": "用坚持和努力实现自己的梦想，让人生更加精彩。",
    "author": "xby",
    "serial_number": 88,
    "interpretation": "通过坚持不懈的努力去实现梦想，使人生更加绚丽多彩"
  },
  {
    "content": "相信自己，你能超越极限，达到新的高度。",
    "author": "xby",
    "serial_number": 89,
    "interpretation": "对自己有信心，突破极限，实现更高层次的发展"
  },
  {
    "content": "用爱心和关怀对待世界，让生活充满温暖。",
    "author": "xby",
    "serial_number": 90,
    "interpretation": "以爱和关怀去对待周围的一切，使生活充满温馨"
  },
  {
    "content": "每天进步一点点，让优秀成为一种习惯，成就更好的自己。",
    "author": "xby",
    "serial_number": 91,
    "interpretation": "日积月累的小进步，养成优秀习惯，塑造更优秀的自己"
  },
  {
    "content": "用智慧和汗水创造属于自己的辉煌，让人生更加有意义。",
    "author": "xby",
    "serial_number": 92,
    "interpretation": "凭借智慧和努力创造辉煌成就，使人生更有价值"
  },
  {
    "content": "相信自己，你能战胜一切困难，成为生活的强者。",
    "author": "xby",
    "serial_number": 93,
    "interpretation": "对自己有信心，克服所有困难，成为生活的强者"
  },
  {
    "content": "用微笑和乐观面对生活的风雨，迎接属于自己的彩虹。",
    "author": "xby",
    "serial_number": 94,
    "interpretation": "以微笑和乐观态度面对挫折，迎接美好的结果"
  },
  {
    "content": "每天给自己一个希望，让生活充满动力，迎接美好明天。",
    "author": "xby",
    "serial_number": 95,
    "interpretation": "每天怀揣希望，为生活注入动力，迎接更好的未来"
  },
  {
    "content": "用坚持和信念走过黑暗的日子，迎来属于自己的黎明。",
    "author": "xby",
    "serial_number": 96,
    "interpretation": "凭借坚持和信念度过艰难时刻，迎来光明和希望"
  },
  {
    "content": "相信自己，你能创造奇迹，让人生更加精彩。",
    "author": "xby",
    "serial_number": 97,
    "interpretation": "对自己有信心，创造奇迹，使人生更加绚丽多彩"
  },
  {
    "content": "用爱心和耐心对待身边的人和事，让生活更加和谐美好。",
    "author": "xby",
    "serial_number": 98,
    "interpretation": "以爱和耐心去对待周围的人和事，促进生活的和谐美好"
  },
  {
    "content": "每天学习新知识，让智慧之树常青，为人生增添光彩。",
    "author": "xby",
    "serial_number": 99,
    "interpretation": "每天获取新知识，使智慧持续增长，为人生增色添彩"
  },
  {
    "content": "用智慧和勇气面对生活的挑战，创造属于自己的美好未来。",
    "author": "xby",
    "serial_number": 100,
    "interpretation": "凭借智慧和勇气去应对生活中的挑战，打造属于自己的美好明天"
  }
];

// 随机获取一个一言
function getRandomYiyan() {
  const randomIndex = Math.floor(Math.random() * yiyan.length);
  return yiyan[randomIndex];
}

// Worker 的主逻辑
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 获取请求的 URL
  const url = new URL(request.url);
  
  // 检查请求的路径是否为 /api/yiyan
  if (url.pathname === '/api/yiyan') {
    // 获取随机一言
    const yiyanItem = getRandomYiyan();

    // 返回 JSON 格式响应
    return new Response(JSON.stringify(yiyanItem), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } else {
    // 如果路径不匹配，返回 404
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}