import os

def generate_level_file(difficulty, level):
    # 根据难度和关卡计算参数
    card_types = min(4 + (level - 1) // 10, 12)  # 每10关增加一种卡片类型
    # 每个卡片出现的数量 * 3
    cards_per_type = 3 * max(1 + (level - 1) // 5, 2)  # 每5关增加一个卡片数量
    max_slots = min(6 + (level - 1) // 20, 10)  # 每20关增加一个槽位
    max_layers = min(3 + (level - 1) // 12, 7)  # 每12关增加一层
    time_limit = max(120, 180 - (level - 1))  # 随关卡递增逐渐减少时间
    
    # 根据难度调整基础参数
    if difficulty > 1:
        card_types = min(card_types + 2, 12)
        cards_per_type = max(cards_per_type + difficulty * 3, 6)
        max_layers = min(max_layers + 1, 7)
        time_limit = max(90, time_limit - 20)
    
    # 生成关卡名称和描述
    difficulty_names = {
        1: '新手入门',
        2: '初级挑战',
        3: '中级进阶',
        4: '高级挑战',
        5: '大师级'
    }
    
    content = f'''/**
 * 难度{difficulty}-关卡{level}配置
 */

import {{ CARD_TYPES }} from '../game/cards.js';

export default {{
  id: {level},
  name: '{difficulty_names[difficulty]}-第{level}关',
  description: '挑战第{level}关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, {card_types}), // 使用前{card_types}种类型的卡片
  cardsPerType: {cards_per_type},
  maxSlots: {max_slots},
  timeLimit: {time_limit},
  maxLayers: {max_layers},
  difficulty: {difficulty}
}};
'''
    
    file_path = f'difficulty_{difficulty}_level_{level}.js'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 为每个难度生成100个关卡
for difficulty in range(1, 6):
    for level in range(1, 101):
        generate_level_file(difficulty, level)