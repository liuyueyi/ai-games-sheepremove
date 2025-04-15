/**
 * 难度4-关卡69配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 69,
  name: '高级挑战-第69关',
  description: '挑战第69关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 54,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 12,
  gridRows: 6,
  gridCols: 8,
  difficulty: 4
};
