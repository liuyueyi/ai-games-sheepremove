/**
 * 难度2-关卡26配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 26,
  name: '初级挑战-第26关',
  description: '挑战第26关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 24,
  maxSlots: 8,
  timeLimit: 135,
  maxLayers: 8,
  gridRows: 4,
  gridCols: 7,
  difficulty: 2
};
