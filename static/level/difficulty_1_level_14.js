/**
 * 难度1-关卡14配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 14,
  name: '新手入门-第14关',
  description: '挑战第14关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 3,
  maxSlots: 6,
  timeLimit: 167,
  maxLayers: 4,
  difficulty: 1
};
