/**
 * 难度1-关卡55配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 55,
  name: '新手入门-第55关',
  description: '挑战第55关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 33,
  maxSlots: 9,
  timeLimit: 126,
  maxLayers: 10,
  gridRows: 5,
  gridCols: 8,
  difficulty: 1
};
