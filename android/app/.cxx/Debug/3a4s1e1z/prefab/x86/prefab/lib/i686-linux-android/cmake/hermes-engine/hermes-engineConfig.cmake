if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/mubashirahmed/.gradle/caches/8.10.2/transforms/04439e350bda14f7441773b2662a1e67/transformed/hermes-android-0.77.1-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/mubashirahmed/.gradle/caches/8.10.2/transforms/04439e350bda14f7441773b2662a1e67/transformed/hermes-android-0.77.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

