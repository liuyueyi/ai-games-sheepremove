/**
 * 难度1-关卡3配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 3,
  name: '新手入门-第3关',
  description: '新手难度的最后一关，挑战自我',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 3,
  maxSlots: 6,
  timeLimit: 160,
  maxLayers: 4,
  difficulty: 1
};