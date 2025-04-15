/**
 * 难度1-关卡46配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 46,
  name: '新手入门-第46关',
  description: '挑战第46关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 30,
  maxSlots: 9,
  timeLimit: 135,
  maxLayers: 9,
  gridRows: 5,
  gridCols: 7,
  difficulty: 1
};
