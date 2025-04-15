/**
 * 难度1-关卡97配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 97,
  name: '新手入门-第97关',
  description: '挑战第97关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 60,
  maxSlots: 10,
  timeLimit: 120,
  maxLayers: 17,
  gridRows: 6,
  gridCols: 8,
  difficulty: 1
};
