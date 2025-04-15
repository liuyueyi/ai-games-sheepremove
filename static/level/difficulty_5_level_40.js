/**
 * 难度5-关卡40配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 40,
  name: '大师级-第40关',
  description: '挑战第40关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 39,
  maxSlots: 8,
  timeLimit: 121,
  maxLayers: 7,
  difficulty: 5
};
