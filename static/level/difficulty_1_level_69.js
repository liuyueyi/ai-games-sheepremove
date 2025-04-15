/**
 * 难度1-关卡69配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 69,
  name: '新手入门-第69关',
  description: '挑战第69关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 42,
  maxSlots: 10,
  timeLimit: 120,
  maxLayers: 11,
  gridRows: 6,
  gridCols: 8,
  difficulty: 1
};
