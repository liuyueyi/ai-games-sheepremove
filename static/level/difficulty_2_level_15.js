/**
 * 难度2-关卡15配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 15,
  name: '初级挑战-第15关',
  description: '挑战第15关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 15,
  maxSlots: 7,
  timeLimit: 146,
  maxLayers: 8,
  gridRows: 4,
  gridCols: 6,
  difficulty: 2
};
