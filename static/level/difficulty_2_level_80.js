/**
 * 难度2-关卡80配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 80,
  name: '初级挑战-第80关',
  description: '挑战第80关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 54,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 14,
  gridRows: 6,
  gridCols: 8,
  difficulty: 2
};
