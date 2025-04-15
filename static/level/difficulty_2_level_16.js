/**
 * 难度2-关卡16配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 16,
  name: '初级挑战-第16关',
  description: '挑战第16关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 18,
  maxSlots: 7,
  timeLimit: 145,
  maxLayers: 8,
  gridRows: 4,
  gridCols: 6,
  difficulty: 2
};
