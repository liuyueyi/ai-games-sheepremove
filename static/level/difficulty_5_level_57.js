/**
 * 难度5-关卡57配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 57,
  name: '大师级-第57关',
  description: '挑战第57关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 51,
  maxSlots: 8,
  timeLimit: 104,
  maxLayers: 7,
  difficulty: 5
};
