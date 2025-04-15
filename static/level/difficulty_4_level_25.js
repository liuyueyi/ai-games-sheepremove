/**
 * 难度4-关卡25配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 25,
  name: '高级挑战-第25关',
  description: '挑战第25关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 27,
  maxSlots: 8,
  timeLimit: 136,
  maxLayers: 8,
  gridRows: 5,
  gridCols: 7,
  difficulty: 4
};
