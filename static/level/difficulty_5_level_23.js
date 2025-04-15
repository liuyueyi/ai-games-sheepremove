/**
 * 难度5-关卡23配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 23,
  name: '大师级-第23关',
  description: '挑战第23关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 30,
  maxSlots: 8,
  timeLimit: 138,
  maxLayers: 8,
  gridRows: 6,
  gridCols: 8,
  difficulty: 5
};
