/**
 * 难度5-关卡97配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 97,
  name: '大师级-第97关',
  description: '挑战第97关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 75,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 18,
  gridRows: 6,
  gridCols: 8,
  difficulty: 5
};
