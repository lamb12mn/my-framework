import type { PiniaPluginContext } from 'pinia';
import { SetupStoreId } from '@/enum';
import { cloneDeep } from 'es-toolkit';
/**
 * The plugin reset the state of the store which is written by setup syntax
 *
 * @param context
 */
export function resetSetupStore(context: PiniaPluginContext) {
    const setupSyntaxIds = Object.values(SetupStoreId) as string[];
    if (setupSyntaxIds.includes(context.store.$id)) {
        const { $state } = context.store;

        const defaultStore = cloneDeep($state);

        context.store.$reset = () => {
          context.store.$patch(defaultStore);
        };
      }
}
// 这段代码定义了一个 Pinia 插件，用于重置使用 setup 语法定义的 store 状态。具体功能如下：

// 获取所有 setup 语法的 store ID。
// 检查当前 store 是否属于 setup 语法定义的 store。
// 如果是，则保存默认状态，并为 store 添加一个 $reset 方法，用于恢复默认状态。
