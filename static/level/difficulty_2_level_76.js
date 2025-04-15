/**
 * 难度2-关卡76配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 76,
  name: '初级挑战-第76关',
  description: '挑战第76关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 54,
  maxSlots: 9,
  timeLimit: 100,
  maxLayers: 7,
  difficulty: 2
};
