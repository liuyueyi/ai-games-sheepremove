/**
 * 难度2-关卡43配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 43,
  name: '初级挑战-第43关',
  description: '挑战第43关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 33,
  maxSlots: 9,
  timeLimit: 118,
  maxLayers: 10,
  gridRows: 5,
  gridCols: 7,
  difficulty: 2
};
