/**
 * 难度1-关卡57配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 57,
  name: '新手入门-第57关',
  description: '挑战第57关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 9), // 使用前9种类型的卡片
  cardsPerType: 36,
  maxSlots: 9,
  timeLimit: 124,
  maxLayers: 11,
  gridRows: 5,
  gridCols: 8,
  difficulty: 1
};
