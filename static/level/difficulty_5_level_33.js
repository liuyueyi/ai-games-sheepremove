/**
 * 难度5-关卡33配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 33,
  name: '大师级-第33关',
  description: '挑战第33关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 36,
  maxSlots: 8,
  timeLimit: 128,
  maxLayers: 8,
  gridRows: 6,
  gridCols: 8,
  difficulty: 5
};
