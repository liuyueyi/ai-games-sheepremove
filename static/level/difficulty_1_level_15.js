/**
 * 难度1-关卡15配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 15,
  name: '新手入门-第15关',
  description: '挑战第15关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 9,
  maxSlots: 6,
  timeLimit: 166,
  maxLayers: 4,
  difficulty: 1
};
