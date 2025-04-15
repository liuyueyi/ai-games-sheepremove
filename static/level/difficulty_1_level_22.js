/**
 * 难度1-关卡22配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 22,
  name: '新手入门-第22关',
  description: '挑战第22关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 15,
  maxSlots: 8,
  timeLimit: 159,
  maxLayers: 7,
  gridRows: 4,
  gridCols: 6,
  difficulty: 1
};
