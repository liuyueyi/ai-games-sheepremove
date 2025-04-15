/**
 * 难度5-关卡44配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 44,
  name: '大师级-第44关',
  description: '挑战第44关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 42,
  maxSlots: 8,
  timeLimit: 117,
  maxLayers: 7,
  difficulty: 5
};
