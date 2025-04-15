/**
 * 难度5-关卡38配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 38,
  name: '大师级-第38关',
  description: '挑战第38关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 39,
  maxSlots: 8,
  timeLimit: 123,
  maxLayers: 8,
  gridRows: 6,
  gridCols: 8,
  difficulty: 5
};
