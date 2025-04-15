/**
 * 难度1-关卡42配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 42,
  name: '新手入门-第42关',
  description: '挑战第42关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 27,
  maxSlots: 9,
  timeLimit: 139,
  maxLayers: 9,
  gridRows: 5,
  gridCols: 7,
  difficulty: 1
};
