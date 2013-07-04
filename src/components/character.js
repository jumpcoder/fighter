/*
 * 玩家
 * 玩家属性：
 * name:Bandit
 * head:sprite/sys/bandit_f.bmp
 * small: sprite\sys\bandit_s.bmp 
 * file(0-69): sprite\sys\bandit_0.bmp w: 79 h: 79 row: 10 col: 7 
 * file(70-139): sprite\sys\bandit_1.bmp w: 79 h: 79 row: 10 col: 7 
 * file(140-209): sprite\sys\bandit_0b.bmp w: 79 h: 79 row: 10 col: 7 
 * file(210-279): sprite\sys\bandit_1b.bmp w: 79 h: 79 row: 10 col: 7 
 * walking_frame_rate 3 
 * walking_speed 4.000000 
 * walking_speedz 2.000000 
 * running_frame_rate 3 
 * running_speed 8.000000 
 * running_speedz 1.300000 
 * heavy_walking_speed 3.000000 
 * heavy_walking_speedz 1.500000 
 * heavy_running_speed 5.000000 
 * heavy_running_speedz 0.800000 
 * jump_height -16.299999 
 * jump_distance 8.000000 
 * jump_distancez 3.000000 
 * dash_height -11.000000 
 * dash_distance 15.000000 
 * dash_distancez 3.750000 
 * rowing_height -2.000000 
 * rowing_distance 5.000000 
 *
 * weapon玩家当前拥有的武器
 *
 * 玩家行为：
 * 1.stand
 * 2.walk
 * 3.run
 * 4.dashing
 * 5.normal punch/kick
 * 6.jumping
 * 7.defending
 * 8.defend broken
 * 9.rowing
 * 10.catching
 * 11.caught
 * 12.injured(being hurt)
 * 13.falling(being hurt in the sky)
 * 14.ice
 * 15.lying
 * 16.faint
 * 17.drinking
 * 18.buring
 * 19.buring run
 * 20.delleted by itself
 * 20.effect/broken thing
 *
 * 按键：
 * 每个玩家行为对应一个事件比如当玩家按下一个键时将触发"defend"事件并触发玩家的defending行为
 * attack
 * jump
 * defend
 * 组合键：
 * 按下多个键后才会触发事件
 * forward+jump back
 * forward+attack fa
 * up + attack ua
 * down + attack da
 * forward + jump fj
 * up + jump uj
 * down + jump dj
 * jump + attack ja
 *
 *
 */