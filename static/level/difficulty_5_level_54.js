/**
 * 难度5-关卡54配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 54,
  name: '大师级-第54关',
  description: '挑战第54关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 6,
  maxSlots: 8,
  timeLimit: 107,
  maxLayers: 7,
  difficulty: 5
};
