// API endpoints for Digital Souls

// GET /user/:id -> UserProfile
// POST /invite { userId } -> InviteLink
// POST /invite/convert { code, newUserId } -> { success: boolean }
// POST /unlock { userId, type } -> UserProfile
// GET /characters -> Character[]
// POST /chat { userId, characterId, message, modality } -> { response }