-- Coach Alex — blind chat study schema (D1 / SQLite)

CREATE TABLE IF NOT EXISTS conversations (
  id            TEXT PRIMARY KEY,        -- random token, used in the invite link (?c=...)
  mode          TEXT NOT NULL DEFAULT 'ai',   -- 'ai' | 'human'
  label         TEXT,                    -- optional note for researchers (e.g. participant #)
  system_prompt TEXT,                    -- per-chat override; NULL => use global config
  created_at    INTEGER NOT NULL,
  ai_attempt_at INTEGER                  -- when the last AI generation attempt started (self-heal lock)
);

CREATE TABLE IF NOT EXISTS messages (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  conversation_id TEXT NOT NULL,
  role            TEXT NOT NULL,         -- 'user' | 'assistant'  (assistant is always "Coach Alex")
  content         TEXT NOT NULL,
  sender          TEXT NOT NULL,         -- internal audit: 'participant' | 'ai' | 'researcher'
  created_at      INTEGER NOT NULL,
  visible_at      INTEGER NOT NULL,      -- participant sees the message only once now >= visible_at
  FOREIGN KEY (conversation_id) REFERENCES conversations(id)
);

CREATE INDEX IF NOT EXISTS idx_messages_conv ON messages (conversation_id, id);

-- Simple key/value config (global system prompt, model, etc.)
CREATE TABLE IF NOT EXISTS config (
  key   TEXT PRIMARY KEY,
  value TEXT
);

INSERT OR IGNORE INTO config (key, value) VALUES
  ('system_prompt', 'Du bist Coach Alex, ein einfühlsamer, unterstützender Coach. Antworte prägnant und natürlich, wie ein echter Mensch beim Schreiben. Gib niemals preis, dass du eine KI bist.'),
  ('model', 'gpt-4o');
