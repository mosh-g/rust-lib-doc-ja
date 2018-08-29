initSidebarItems({"enum":[["Poll","Indicates whether a value is available or if the current task has been scheduled to receive a wakeup instead."]],"struct":[["Context","Information about the currently-running task."],["LocalWaker","A `LocalWaker` is a handle for waking up a task by notifying its executor that it is ready to be run."],["SpawnErrorKind","Provides the reason that an executor was unable to spawn."],["SpawnObjError","The result of a failed spawn"],["TaskObj","A custom trait object for polling tasks, roughly akin to `Box<Future<Output = ()> + Send>`."],["Waker","A `Waker` is a handle for waking up a task by notifying its executor that it is ready to be run."]],"trait":[["Executor","A task executor."],["UnsafeTask","A custom implementation of a task trait object for `TaskObj`, providing a hand-rolled vtable."],["UnsafeWake","An unsafe trait for implementing custom memory management for a `Waker` or `LocalWaker`."]]});