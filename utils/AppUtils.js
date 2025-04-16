const isAndroid = uni.getSystemInfoSync().platform === 'android';
const ADS_DISABLED_KEY = 'ads_disabled_until';

class AppUtils {
	static androidPlantform() {
		return isAndroid;
	}

	static showAds() {
		if (!isAndroid || this.isAdsDisabled()) {
            console.log('不显示广告');
			return;
		}

		try {
			const ToastHelper = plus.android.importClass('com.git.hui.uniapp.ads.GlobalAdsManager');
			ToastHelper.autoShowAds();
		} catch (e) {
			console.error('调用Android Toast失败:', e);
		}
	}


	static showLogs(text) {
		if (!isAndroid) {
			return;
		}

		var testModule = uni.requireNativePlugin("AdsModule");
		testModule.printLog(text);
	}

	/**
	 * 视频激励广告
	 */
	static showRewards(callback, failedCallback) {
		if (!isAndroid) {
			// 回调
			callback(true);
			return;
		}

		var testModule = uni.requireNativePlugin("AdsModule");
		testModule.showAds('reward', (res) => {
			console.log('app返回的结果是:', res)
			const suc = res && res.code === 'success';
			if (callback) {
				testModule.printLog(JSON.stringify(res) + "|" + suc);
				callback(suc);
			} else {
				if (failedCallback) {
					failedCallback()
				}
			}
		})
	}

	/**
	 * 看视频免兑换免广告时长
	 * 
	 * @param {*} callback 
	 * @returns 
	 */
	static autoCloseAds(callback) {
		if (!isAndroid) {
			callback(true);
			return;
		}

		var testModule = uni.requireNativePlugin("AdsModule");
		testModule.showAds('reward', (res) => {
			console.log('app返回的结果是:', res)
			const suc = res && res.code === 'success';
			const disabledUntil = Date.now() + 24 * 60 * 60 * 1000;
			if (suc) {
				// 设置24小时后的时间戳
				uni.setStorageSync(ADS_DISABLED_KEY, disabledUntil);
			}
			if (callback) {
				testModule.printLog(JSON.stringify(res) + "|" + suc + "无广告时间:" + disabledUntil);
				callback(suc);
			}
		})
	}

	static isAdsDisabled() {
		try {
			const disabledUntil = uni.getStorageSync(ADS_DISABLED_KEY);
			if (!disabledUntil) return false;
			return Date.now() < disabledUntil;
		} catch (e) {
			return false;
		}
	}

	static getAdFreeTime() {
		try {
			const disabledUntil = uni.getStorageSync(ADS_DISABLED_KEY);
			if (!disabledUntil) return 0;
			const remainingTime = disabledUntil - Date.now();
			return remainingTime > 0 ? Math.floor(remainingTime / 1000) : 0;
		} catch (e) {
			return 0;
		}
	}
}

export default AppUtils;