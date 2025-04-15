/**
 * 难度5-关卡47配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 47,
  name: '大师级-第47关',
  description: '挑战第47关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 45,
  maxSlots: 9,
  timeLimit: 114,
  maxLayers: 7,
  difficulty: 5
};
