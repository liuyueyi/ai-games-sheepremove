import os
import json

def generate_level_file(difficulty, level):
    # 根据难度和关卡计算参数
    card_types = min(4 + (level - 1) // 10, 12)  # 每10关增加一种卡片类型
    # 每个卡片出现的数量 * 3
    cards_per_type = 3 * max(1 + (level - 1) // 5, 2)  # 每5关增加一个卡片数量
    max_slots = min(7 + (level - 1) // 20, 10)  # 每20关增加一个槽位
    
    # 根据难度和关卡动态设置网格大小
    base_rows = 6 + (level - 1) // 30  # 每30关增加一行
    base_cols = 4 + (level - 1) // 25  # 每25关增加一列
    
    # 根据难度调整基础网格大小
    grid_rows = min(base_rows + (difficulty - 1) // 2, 6)  # 最多6行
    grid_cols = min(base_cols + (difficulty - 1) // 2, 8)  # 最多8列
    
    # 计算总卡片数量
    total_cards = card_types * cards_per_type
    # 计算每层最大可放置卡片数量（基于网格大小）
    cards_per_layer = grid_rows * grid_cols  # 每层可放置的卡片数量
    # 计算最少需要的层数，并额外增加1-2层作为游戏难度调整空间
    min_layers = (total_cards + cards_per_layer - 1) // cards_per_layer
    max_layers = max(min_layers + 2, 7)  # 最多7层
    
    time_limit = max(120, 180 - (level - 1))  # 随关卡递增逐渐减少时间
    
    # 根据难度调整基础参数
    if difficulty > 1:
        card_types = min(card_types + 2, 12)
        cards_per_type = max(cards_per_type + difficulty * 3, 6)
        max_layers = max(max_layers + 1, 7)
        time_limit = max(90, time_limit - 20)
    
    # 生成关卡名称和描述
    difficulty_names = {
        1: '新手入门',
        2: '初级挑战',
        3: '中级进阶',
        4: '高级挑战',
        5: '大师级'
    }
    
    # 生成卡片类型数组
    CARD_TYPES = [
        { 'id': 1, 'name': '塑料瓶', 'icon': '🥤' },
        { 'id': 2, 'name': '纸箱', 'icon': '📦' },
        { 'id': 3, 'name': '电池', 'icon': '🔋' },
        { 'id': 4, 'name': '垃圾桶', 'icon': '🗑️' },
        { 'id': 5, 'name': '报纸', 'icon': '📰' },
        { 'id': 6, 'name': '购物袋', 'icon': '🛍️' },
        { 'id': 7, 'name': '罐头', 'icon': '🥫' },
        { 'id': 8, 'name': '药品', 'icon': '💊' },
        { 'id': 9, 'name': '玻璃瓶', 'icon': '🍾' },
        { 'id': 10, 'name': '食物残渣', 'icon': '🍖' },
        { 'id': 11, 'name': '旧衣物', 'icon': '👕' },
        { 'id': 12, 'name': '废纸', 'icon': '📄' },
    ]
    card_types_array = [card for card in CARD_TYPES[:card_types]]
    
    return {
        "id": level,
        "name": f"{difficulty_names[difficulty]}-第{level}关",
        "description": f"挑战第{level}关，考验你的技巧",
        "cardTypes": card_types_array,
        "cardsPerType": cards_per_type,
        "maxSlots": max_slots,
        "timeLimit": time_limit,
        "maxLayers": max_layers,
        "gridRows": grid_rows,
        "gridCols": grid_cols,
        "difficulty": difficulty
    }

# 生成所有关卡配置
all_levels = {}
for difficulty in range(1, 6):
    all_levels[difficulty] = []
    for level in range(1, 101):
        level_config = generate_level_file(difficulty, level)
        all_levels[difficulty].append(level_config)

# 将所有关卡配置保存到一个JSON文件中
output_dir = os.path.dirname(os.path.abspath(__file__))
output_file = os.path.join(output_dir, 'levels.json')

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(all_levels, f, ensure_ascii=False, indent=2)