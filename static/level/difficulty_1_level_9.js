/**
 * 难度1-关卡9配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 9,
  name: '新手入门-第9关',
  description: '挑战第9关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 3,
  maxSlots: 6,
  timeLimit: 172,
  maxLayers: 3,
  difficulty: 1
};
