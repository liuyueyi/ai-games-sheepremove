/**
 * 难度5-关卡28配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 28,
  name: '大师级-第28关',
  description: '挑战第28关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 5,
  maxSlots: 7,
  timeLimit: 133,
  maxLayers: 6,
  difficulty: 5
};
