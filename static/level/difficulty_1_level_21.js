/**
 * 难度1-关卡21配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 21,
  name: '新手入门-第21关',
  description: '挑战第21关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 15,
  maxSlots: 7,
  timeLimit: 160,
  maxLayers: 4,
  difficulty: 1
};
