// 定义化学方程式数据
const chemicalEquations = [
  {
    "content": "C + O2 → CO2",
    "author": "xby",
    "serial_number": 1,
    "interpretation": "碳与氧气在点燃条件下反应生成二氧化碳"
  },
  {
    "content": "2H2 + O2 → 2H2O",
    "author": "xby",
    "serial_number": 2,
    "interpretation": "氢气与氧气在点燃条件下反应生成水"
  },
  {
    "content": "NaOH + HCl → NaCl + H2O",
    "author": "xby",
    "serial_number": 3,
    "interpretation": "氢氧化钠与盐酸发生中和反应生成氯化钠和水"
  },
  {
    "content": "2KClO3 → 2KCl + 3O2↑",
    "author": "xby",
    "serial_number": 4,
    "interpretation": "氯酸钾在二氧化锰催化并加热的条件下分解生成氯化钾和氧气"
  },
  {
    "content": "CaCO3 + 2HCl → CaCl2 + H2O + CO2↑",
    "author": "xby",
    "serial_number": 5,
    "interpretation": "碳酸钙与盐酸反应生成氯化钙、水和二氧化碳"
  },
  {
    "content": "CH4 + 2O2 → CO2 + 2H2O",
    "author": "xby",
    "serial_number": 6,
    "interpretation": "甲烷与氧气在点燃条件下反应生成二氧化碳和水"
  },
  {
    "content": "2Mg + O2 → 2MgO",
    "author": "xby",
    "serial_number": 7,
    "interpretation": "镁与氧气在点燃条件下反应生成氧化镁"
  },
  {
    "content": "S + O2 → SO2",
    "author": "xby",
    "serial_number": 8,
    "interpretation": "硫与氧气在点燃条件下反应生成二氧化硫"
  },
  {
    "content": "2K + 2H2O → 2KOH + H2↑",
    "author": "xby",
    "serial_number": 9,
    "interpretation": "钾与水在常温下剧烈反应生成氢氧化钾和氢气"
  },
  {
    "content": "Fe + CuSO4 → FeSO4 + Cu",
    "author": "xby",
    "serial_number": 10,
    "interpretation": "铁与硫酸铜溶液发生置换反应生成硫酸亚铁和铜"
  },
  {
    "content": "2Al + 6HCl → 2AlCl3 + 3H2↑",
    "author": "xby",
    "serial_number": 11,
    "interpretation": "铝与盐酸反应生成氯化铝和氢气"
  },
  {
    "content": "AgNO3 + NaCl → AgCl↓ + NaNO3",
    "author": "xby",
    "serial_number": 12,
    "interpretation": "硝酸银与氯化钠溶液反应生成氯化银沉淀和硝酸钠"
  },
  {
    "content": "2Na + Cl2 → 2NaCl",
    "author": "xby",
    "serial_number": 13,
    "interpretation": "钠与氯气在点燃条件下反应生成氯化钠"
  },
  {
    "content": "2H2O2 → 2H2O + O2↑",
    "author": "xby",
    "serial_number": 14,
    "interpretation": "过氧化氢在二氧化锰催化下分解生成水和氧气"
  },
  {
    "content": "NH3 + HCl → NH4Cl",
    "author": "xby",
    "serial_number": 15,
    "interpretation": "氨气与氯化氢气体反应生成氯化铵固体"
  },
  {
    "content": "CO2 + 2NaOH → Na2CO3 + H2O",
    "author": "xby",
    "serial_number": 16,
    "interpretation": "二氧化碳与氢氧化钠溶液反应生成碳酸钠和水"
  },
  {
    "content": "Ca(OH)2 + CO2 → CaCO3↓ + H2O",
    "author": "xby",
    "serial_number": 17,
    "interpretation": "氢氧化钙与二氧化碳反应生成碳酸钙沉淀和水"
  },
  {
    "content": "2H2S + SO2 → 3S↓ + 2H2O",
    "author": "xby",
    "serial_number": 18,
    "interpretation": "硫化氢与二氧化硫反应生成硫单质和水"
  },
  {
    "content": "C + 2CuO → 2Cu + CO2↑",
    "author": "xby",
    "serial_number": 19,
    "interpretation": "碳与氧化铜在高温下反应生成铜和二氧化碳"
  },
  {
    "content": "Fe2O3 + 3CO → 2Fe + 3CO2",
    "author": "xby",
    "serial_number": 20,
    "interpretation": "氧化铁与一氧化碳在高温下反应生成铁和二氧化碳"
  },
  {
    "content": "2H2O → 2H2↑ + O2↑",
    "author": "xby",
    "serial_number": 21,
    "interpretation": "水在通电条件下分解生成氢气和氧气"
  },
  {
    "content": "Zn + H2SO4 → ZnSO4 + H2↑",
    "author": "xby",
    "serial_number": 22,
    "interpretation": "锌与稀硫酸反应生成硫酸锌和氢气"
  },
  {
    "content": "Cu + 2AgNO3 → Cu(NO3)2 + 2Ag",
    "author": "xby",
    "serial_number": 23,
    "interpretation": "铜与硝酸银溶液反应生成硝酸铜和银"
  },
  {
    "content": "2HCl + Fe → FeCl2 + H2↑",
    "author": "xby",
    "serial_number": 24,
    "interpretation": "盐酸与铁反应生成氯化亚铁和氢气"
  },
  {
    "content": "3CO + Fe2O3 → 2Fe + 3CO2",
    "author": "xby",
    "serial_number": 25,
    "interpretation": "一氧化碳与氧化铁在高温下反应生成铁和二氧化碳"
  },
  {
    "content": "4Fe + 3O2 → 2Fe2O3",
    "author": "xby",
    "serial_number": 26,
    "interpretation": "铁与氧气在点燃条件下反应生成三氧化二铁"
  },
  {
    "content": "2SO2 + O2 → 2SO3",
    "author": "xby",
    "serial_number": 27,
    "interpretation": "二氧化硫与氧气在催化剂存在下反应生成三氧化硫"
  },
  {
    "content": "SO3 + H2O → H2SO4",
    "author": "xby",
    "serial_number": 28,
    "interpretation": "三氧化硫与水反应生成硫酸"
  },
  {
    "content": "NH3 + CO2 + H2O → NH4HCO3",
    "author": "xby",
    "serial_number": 29,
    "interpretation": "氨气、二氧化碳和水反应生成碳酸氢铵"
  },
  {
    "content": "2NaCl + H2SO4 → 2HCl + Na2SO4",
    "author": "xby",
    "serial_number": 30,
    "interpretation": "氯化钠与硫酸反应生成氯化氢和硫酸钠"
  },
  {
    "content": "CaCO3 → CaO + CO2↑",
    "author": "xby",
    "serial_number": 31,
    "interpretation": "碳酸钙在高温下分解生成氧化钙和二氧化碳"
  },
  {
    "content": "2HgO → 2Hg + O2↑",
    "author": "xby",
    "serial_number": 32,
    "interpretation": "氧化汞在加热条件下分解生成汞和氧气"
  },
  {
    "content": "2KClO3 → 2KCl + 3O2↑",
    "author": "xby",
    "serial_number": 33,
    "interpretation": "氯酸钾在二氧化锰催化并加热的条件下分解生成氯化钾和氧气"
  },
  {
    "content": "2KMnO4 → K2MnO4 + MnO2 + O2↑",
    "author": "xby",
    "serial_number": 34,
    "interpretation": "高锰酸钾在加热条件下分解生成锰酸钾、二氧化锰和氧气"
  },
  {
    "content": "2H2O → 2H2↑ + O2↑",
    "author": "xby",
    "serial_number": 35,
    "interpretation": "水在通电条件下分解生成氢气和氧气"
  },
  {
    "content": "C + H2O → CO + H2",
    "author": "xby",
    "serial_number": 36,
    "interpretation": "碳与水蒸气在高温下反应生成一氧化碳和氢气"
  },
  {
    "content": "CO + H2O → CO2 + H2",
    "author": "xby",
    "serial_number": 37,
    "interpretation": "一氧化碳与水蒸气在催化剂存在下反应生成二氧化碳和氢气"
  },
  {
    "content": "CH3COOH + NaOH → CH3COONa + H2O",
    "author": "xby",
    "serial_number": 38,
    "interpretation": "醋酸与氢氧化钠发生中和反应生成醋酸钠和水"
  },
  {
    "content": "Na2CO3 + 2HCl → 2NaCl + H2O + CO2↑",
    "author": "xby",
    "serial_number": 39,
    "interpretation": "碳酸钠与盐酸反应生成氯化钠、水和二氧化碳"
  },
  {
    "content": "CuSO4 + 2NaOH → Cu(OH)2↓ + Na2SO4",
    "author": "xby",
    "serial_number": 40,
    "interpretation": "硫酸铜与氢氧化钠溶液反应生成氢氧化铜沉淀和硫酸钠"
  },
  {
    "content": "FeCl3 + 3NaOH → Fe(OH)3↓ + 3NaCl",
    "author": "xby",
    "serial_number": 41,
    "interpretation": "氯化铁与氢氧化钠溶液反应生成氢氧化铁沉淀和氯化钠"
  },
  {
    "content": "AlCl3 + 3NaOH → Al(OH)3↓ + 3NaCl",
    "author": "xby",
    "serial_number": 42,
    "interpretation": "氯化铝与氢氧化钠溶液反应生成氢氧化铝沉淀和氯化钠"
  },
  {
    "content": "2Al + 6HCl → 2AlCl3 + 3H2↑",
    "author": "xby",
    "serial_number": 43,
    "interpretation": "铝与盐酸反应生成氯化铝和氢气"
  },
  {
    "content": "Zn + CuSO4 → ZnSO4 + Cu",
    "author": "xby",
    "serial_number": 44,
    "interpretation": "锌与硫酸铜溶液发生置换反应生成硫酸锌和铜"
  },
  {
    "content": "Fe + 2AgNO3 → Fe(NO3)2 + 2Ag",
    "author": "xby",
    "serial_number": 45,
    "interpretation": "铁与硝酸银溶液反应生成硝酸亚铁和银"
  },
  {
    "content": "2Al + 3CuSO4 → Al2(SO4)3 + 3Cu",
    "author": "xby",
    "serial_number": 46,
    "interpretation": "铝与硫酸铜溶液反应生成硫酸铝和铜"
  },
  {
    "content": "Fe + CuCl2 → FeCl2 + Cu",
    "author": "xby",
    "serial_number": 47,
    "interpretation": "铁与氯化铜溶液发生置换反应生成氯化亚铁和铜"
  },
  {
    "content": "Mg + 2HCl → MgCl2 + H2↑",
    "author": "xby",
    "serial_number": 48,
    "interpretation": "镁与盐酸反应生成氯化镁和氢气"
  },
  {
    "content": "Ca(OH)2 + Na2CO3 → CaCO3↓ + 2NaOH",
    "author": "xby",
    "serial_number": 49,
    "interpretation": "氢氧化钙与碳酸钠溶液反应生成碳酸钙沉淀和氢氧化钠"
  },
  {
    "content": "BaCl2 + H2SO4 → BaSO4↓ + 2HCl",
    "author": "xby",
    "serial_number": 50,
    "interpretation": "氯化钡与硫酸反应生成硫酸钡沉淀和盐酸"
  },
  {
    "content": "C2H5OH + 3O2 → 2CO2 + 3H2O",
    "author": "xby",
    "serial_number": 51,
    "interpretation": "乙醇与氧气在点燃条件下反应生成二氧化碳和水"
  },
  {
    "content": "2C4H10 + 13O2 → 8CO2 + 10H2O",
    "author": "xby",
    "serial_number": 52,
    "interpretation": "丁烷与氧气在点燃条件下反应生成二氧化碳和水"
  },
  {
    "content": "4Fe(OH)2 + O2 + 2H2O → 4Fe(OH)3",
    "author": "xby",
    "serial_number": 53,
    "interpretation": "氢氧化亚铁与氧气和水反应生成氢氧化铁"
  },
  {
    "content": "2H2S + 3O2 → 2SO2 + 2H2O",
    "author": "xby",
    "serial_number": 54,
    "interpretation": "硫化氢与氧气在点燃条件下反应生成二氧化硫和水"
  },
  {
    "content": "2SO2 + O2 → 2SO3",
    "author": "xby",
    "serial_number": 55,
    "interpretation": "二氧化硫与氧气在催化剂存在下反应生成三氧化硫"
  },
  {
    "content": "CaO + H2O → Ca(OH)2",
    "author": "xby",
    "serial_number": 56,
    "interpretation": "氧化钙与水反应生成氢氧化钙"
  },
  {
    "content": "2KOH + H2SO4 → K2SO4 + 2H2O",
    "author": "xby",
    "serial_number": 57,
    "interpretation": "氢氧化钾与硫酸发生中和反应生成硫酸钾和水"
  },
  {
    "content": "2Na + 2H2O → 2NaOH + H2↑",
    "author": "xby",
    "serial_number": 58,
    "interpretation": "钠与水在常温下剧烈反应生成氢氧化钠和氢气"
  },
  {
    "content": "2Al + 2NaOH + 6H2O → 2NaAl(OH)4 + 3H2↑",
    "author": "xby",
    "serial_number": 59,
    "interpretation": "铝与氢氧化钠溶液反应生成四羟基合铝酸钠和氢气"
  },
  {
    "content": "Fe + 2FeCl3 → 3FeCl2",
    "author": "xby",
    "serial_number": 60,
    "interpretation": "铁与氯化铁溶液反应生成氯化亚铁"
  },
  {
    "content": "Zn + 2AgNO3 → Zn(NO3)2 + 2Ag",
    "author": "xby",
    "serial_number": 61,
    "interpretation": "锌与硝酸银溶液反应生成硝酸锌和银"
  },
  {
    "content": "Cu + 2FeCl3 → CuCl2 + 2FeCl2",
    "author": "xby",
    "serial_number": 62,
    "interpretation": "铜与氯化铁溶液反应生成氯化铜和氯化亚铁"
  },
  {
    "content": "2Fe + 3Cl2 → 2FeCl3",
    "author": "xby",
    "serial_number": 63,
    "interpretation": "铁与氯气在点燃条件下反应生成氯化铁"
  },
  {
    "content": "2Al + 3Br2 → 2AlBr3",
    "author": "xby",
    "serial_number": 64,
    "interpretation": "铝与溴在常温下反应生成溴化铝"
  },
  {
    "content": "2Na + S → Na2S",
    "author": "xby",
    "serial_number": 65,
    "interpretation": "钠与硫在常温下反应生成硫化钠"
  },
  {
    "content": "2Fe + O2 → 2FeO",
    "author": "xby",
    "serial_number": 66,
    "interpretation": "铁与氧气在点燃条件下反应生成氧化亚铁"
  },
  {
    "content": "4Fe + 3O2 → 2Fe2O3",
    "author": "xby",
    "serial_number": 67,
    "interpretation": "铁与氧气在点燃条件下反应生成三氧化二铁"
  },
  {
    "content": "2Mg + CO2 → 2MgO + C",
    "author": "xby",
    "serial_number": 68,
    "interpretation": "镁与二氧化碳在点燃条件下反应生成氧化镁和碳"
  },
  {
    "content": "2Ca + O2 → 2CaO",
    "author": "xby",
    "serial_number": 69,
    "interpretation": "钙与氧气在点燃条件下反应生成氧化钙"
  },
  {
    "content": "2Ca + 5H2O → 2Ca(OH)2 + 3H2↑",
    "author": "xby",
    "serial_number": 70,
    "interpretation": "钙与水在常温下反应生成氢氧化钙和氢气"
  },
  {
    "content": "2K + 2H2O → 2KOH + H2↑",
    "author": "xby",
    "serial_number": 71,
    "interpretation": "钾与水在常温下剧烈反应生成氢氧化钾和氢气"
  },
  {
    "content": "2Na + 2H2O → 2NaOH + H2↑",
    "author": "xby",
    "serial_number": 72,
    "interpretation": "钠与水在常温下剧烈反应生成氢氧化钠和氢气"
  },
  {
    "content": "2K + 2H2O → 2KOH + H2↑",
    "author": "xby",
    "serial_number": 73,
    "interpretation": "钾与水在常温下剧烈反应生成氢氧化钾和氢气"
  },
  {
    "content": "2Rb + 2H2O → 2RbOH + H2↑",
    "author": "xby",
    "serial_number": 74,
    "interpretation": "铷与水在常温下剧烈反应生成氢氧化铷和氢气"
  },
  {
    "content": "2Cs + 2H2O → 2CsOH + H2↑",
    "author": "xby",
    "serial_number": 75,
    "interpretation": "铯与水在常温下剧烈反应生成氢氧化铯和氢气"
  },
  {
    "content": "2Li + 2H2O → 2LiOH + H2↑",
    "author": "xby",
    "serial_number": 76,
    "interpretation": "锂与水在常温下反应生成氢氧化锂和氢气"
  },
  {
    "content": "2Na + S → Na2S",
    "author": "xby",
    "serial_number": 77,
    "interpretation": "钠与硫在常温下反应生成硫化钠"
  },
  {
    "content": "2K + S → K2S",
    "author": "xby",
    "serial_number": 78,
    "interpretation": "钾与硫在常温下反应生成硫化钾"
  },
  {
    "content": "2Rb + S → Rb2S",
    "author": "xby",
    "serial_number": 79,
    "interpretation": "铷与硫在常温下反应生成硫化铷"
  },
  {
    "content": "2Cs + S → Cs2S",
    "author": "xby",
    "serial_number": 80,
    "interpretation": "铯与硫在常温下反应生成硫化铯"
  },
  {
    "content": "2Li + S → Li2S",
    "author": "xby",
    "serial_number": 81,
    "interpretation": "锂与硫在常温下反应生成硫化锂"
  },
  {
    "content": "2Na + 2NH3 → 2NaNH2 + H2↑",
    "author": "xby",
    "serial_number": 82,
    "interpretation": "钠与液氨反应生成氨基钠和氢气"
  },
  {
    "content": "2K + 2NH3 → 2KNH2 + H2↑",
    "author": "xby",
    "serial_number": 83,
    "interpretation": "钾与液氨反应生成氨基钾和氢气"
  },
  {
    "content": "2Rb + 2NH3 → 2RbNH2 + H2↑",
    "author": "xby",
    "serial_number": 84,
    "interpretation": "铷与液氨反应生成氨基铷和氢气"
  },
  {
    "content": "2Cs + 2NH3 → 2CsNH2 + H2↑",
    "author": "xby",
    "serial_number": 85,
    "interpretation": "铯与液氨反应生成氨基铯和氢气"
  },
  {
    "content": "2Li + 2NH3 → 2LiNH2 + H2↑",
    "author": "xby",
    "serial_number": 86,
    "interpretation": "锂与液氨反应生成氨基锂和氢气"
  },
  {
    "content": "2Na + 2CH3OH → 2CH3ONa + H2↑",
    "author": "xby",
    "serial_number": 87,
    "interpretation": "钠与甲醇反应生成甲醇钠和氢气"
  },
  {
    "content": "2K + 2CH3OH → 2CH3OK + H2↑",
    "author": "xby",
    "serial_number": 88,
    "interpretation": "钾与甲醇反应生成甲醇钾和氢气"
  },
  {
    "content": "2Rb + 2CH3OH → 2CH3ORb + H2↑",
    "author": "xby",
    "serial_number": 89,
    "interpretation": "铷与甲醇反应生成甲醇铷和氢气"
  },
  {
    "content": "2Cs + 2CH3OH → 2CH3OCs + H2↑",
    "author": "xby",
    "serial_number": 90,
    "interpretation": "铯与甲醇反应生成甲醇铯和氢气"
  },
  {
    "content": "2Li + 2CH3OH → 2CH3OLi + H2↑",
    "author": "xby",
    "serial_number": 91,
    "interpretation": "锂与甲醇反应生成甲醇锂和氢气"
  },
  {
    "content": "2Na + C2H5OH → 2C2H5ONa + H2↑",
    "author": "xby",
    "serial_number": 92,
    "interpretation": "钠与乙醇反应生成乙醇钠和氢气"
  },
  {
    "content": "2K + C2H5OH → 2C2H5OK + H2↑",
    "author": "xby",
    "serial_number": 93,
    "interpretation": "钾与乙醇反应生成乙醇钾和氢气"
  },
  {
    "content": "2Rb + C2H5OH → 2C2H5ORb + H2↑",
    "author": "xby",
    "serial_number": 94,
    "interpretation": "铷与乙醇反应生成乙醇铷和氢气"
  },
  {
    "content": "2Cs + C2H5OH → 2C2H5OCs + H2↑",
    "author": "xby",
    "serial_number": 95,
    "interpretation": "铯与乙醇反应生成乙醇铯和氢气"
  },
  {
    "content": "2Li + 2C2H5OH → 2C2H5OLi + H2↑",
    "author": "xby",
    "serial_number": 96,
    "interpretation": "锂与乙醇反应生成乙醇锂和氢气"
  },
  {
    "content": "2Al + 6CH3COOH → 2(CH3COO)3Al + 3H2↑",
    "author": "xby",
    "serial_number": 97,
    "interpretation": "铝与醋酸反应生成醋酸铝和氢气"
  },
  {
    "content": "2Fe + 6CH3COOH → 2(CH3COO)2Fe + 3H2↑",
    "author": "xby",
    "serial_number": 98,
    "interpretation": "铁与醋酸反应生成醋酸亚铁和氢气"
  },
  {
    "content": "Zn + 2CH3COOH → (CH3COO)2Zn + H2↑",
    "author": "xby",
    "serial_number": 99,
    "interpretation": "锌与醋酸反应生成醋酸锌和氢气"
  },
  {
    "content": "Mg + 2CH3COOH → (CH3COO)2Mg + H2↑",
    "author": "xby",
    "serial_number": 100,
    "interpretation": "镁与醋酸反应生成醋酸镁和氢气"
  }
  // 继续添加其他化学方程式...
];

// 随机获取一个化学方程式
function getRandomEquation() {
  const randomIndex = Math.floor(Math.random() * chemicalEquations.length);
  return chemicalEquations[randomIndex];
}

// Worker 的主逻辑
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 获取请求的 URL
  const url = new URL(request.url);
  
  // 检查请求的路径是否为 /api/random
  if (url.pathname === '/api/random') {
    const params = url.searchParams;
    const serialNumber = params.get('serial_number');

    let equation;
    if (serialNumber) {
      // 按 serial_number 筛选
      equation = chemicalEquations.find(eq => eq.serial_number === parseInt(serialNumber));
      if (!equation) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
      }
    } else {
      // 获取随机化学方程式
      equation = getRandomEquation();
    }

    // 返回 JSON 格式响应
    return new Response(JSON.stringify(equation), {
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