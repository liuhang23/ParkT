package com.smartlab.park.util;


/**
 * EJB定时器 用于同步mysql中的时间戳,2h. 还有一个定时任务 正常异常
 * 
 * @author liu
 *
 */
//@Stateless
//@TransactionManagement(TransactionManagementType.BEAN)
//public class Timer {
//
//	@Inject
//	Logger log;
//
//	@Inject
//	HardWareData hardWareData;
//
//	// JTA事务.
//	@Resource
//	SessionContext ctx;
//
//	UserTransaction tx;
//
//	@Schedule(hour = "*/2")
//	public void startTimer() {
//		log.info("开始定时任务");
//		try {
//			tx = ctx.getUserTransaction();
//			tx.begin();
//			hardWareData.TimerState();
//			tx.commit();
//		} catch (Exception e) {
//			e.printStackTrace();
//			if (tx != null) {
//				try {
//					tx.rollback();
//				} catch (Exception e1) {
//					e1.printStackTrace();
//				}
//			}
//
//		}
//	}
//
//}
