# Software Engineering, System Architecture & AI Agents: Fast Reference Summary

A consolidated, rapid-reference architecture summary synthesizing core engineering primitives, the 22 resilience strategies, distributed system patterns, and autonomous AI agent operations.

---

## 1. Core Architecture Primitives

| Primitive | Architectural Role | Key Standard |
| :--- | :--- | :--- |
| **Rate Limiter** | Traffic ingestion control | Token bucket or sliding window algorithm. HTTP 429 with Retry-After. |
| **API Gateway** | Edge entry & reverse proxy | TLS termination, auth offload, path routing, and rate enforcement. |
| **Circuit Breaker** | Cascading failure barrier | 3 states (Closed, Open, Half-Open). Fast error fallback on >50% failure rate. |
| **Message Queue** | Async decoupling & backpressure | Durable disk-backed buffers (RabbitMQ/Kafka) absorbing load spikes. |
| **Transactional Outbox** | Distributed dual-write defense | Atomically commit state change and outbox event in same relational transaction. |
| **CQRS & Event Sourcing** | Read/write segregation | Append-only immutable event streams projecting to denormalized read models. |
| **Idempotency** | Duplicate prevention | Idempotency-Key headers with atomic status locks (Pending, Completed). |

---

## 2. The 22 Fault Tolerance & Resilience Strategies

| # | Strategy | Objective | Core Mechanism |
| :--- | :--- | :--- | :--- |
| 01 | **Redundancy** | Eliminate SPOF | Minimum N+1 compute, N+2 distributed consensus, anycast multipathing. |
| 02 | **Failover** | Standby activation | Sub-3s health detection with fencing tokens against split-brain writes. |
| 03 | **Load Balancing** | Uniform distribution | Least-connections Layer 7 routing with graceful connection draining. |
| 04 | **Health Checks** | Node eviction | Isolated liveness (/health/live) vs deep readiness (/health/ready) probes. |
| 05 | **Circuit Breaker** | Stop dead dependency calls | Trip OPEN on 50% errors; fast fallback cached responses; 30s half-open canary. |
| 06 | **Retry Policy** | Recover transient drops | Retry 503/504 only (max 3); NEVER retry 4xx; supply Idempotency-Key. |
| 07 | **Exponential Backoff** | Desynchronize clients | delay = random(0, min(max_delay, base * 2^attempt)) with full jitter. |
| 08 | **Timeouts** | Reclaim connections | Cascading RPC deadline budgets; client connect, read, and DB query timeouts. |
| 09 | **Bulkheads** | Contain blast radius | Partition dedicated threadpools and DB connections per downstream service. |
| 10 | **Graceful Degradation** | Core survivability | Dynamic Tier 3 feature shedding; serve stale CDN caches during peak load. |
| 11 | **Replication** | Data survivability | Synchronous replication to >=1 standby (RPO=0); lag-monitored read replicas. |
| 12 | **Database Backups** | Catastrophe recovery | Continuous WAL archiving + daily snapshots enabling Point-in-Time Recovery. |
| 13 | **Disaster Recovery** | Cross-region revival | Formal RTO (<=15m) and RPO (<=1m) via automated Infrastructure as Code. |
| 14 | **Multi-AZ** | Zone blackout survival | 3-zone pod topology spread surviving metropolitan data center drops. |
| 15 | **Multi-Region** | Continental survivability | Active-standby or active-active global anycast steering with logical replication. |
| 16 | **Idempotency** | Safe retries | Unique atomic transaction token ensuring duplicate requests return identical state. |
| 17 | **Message Queues** | Absorb burst spikes | Producers write fast; consumers process steadily via durable backpressure queues. |
| 18 | **Dead Letter Queues** | Poison pill isolation | Route malformed messages to DLQ after 5 failed attempts; automated alerts. |
| 19 | **Rate Limiting** | Prevent node saturation | Enforce multi-tier IP and API-token quotas at edge reverse proxies. |
| 20 | **Chaos Engineering** | Verify self-healing | Proactively inject network latency and pod terminations to validate recovery. |
| 21 | **Observability** | Rapid diagnosis | Four Golden Signals (Latency, Traffic, Errors, Saturation) + OTel tracing. |
| 22 | **Recovery Testing** | Validate runbooks | Routine automated backup restore pipelines and quarterly disaster GameDays. |

---

## 3. Databases, Caching & Data Consistency

* **ACID Transactions**: Read Committed baseline; Repeatable Read or Serializable for ledger balances.
* **Database Pooling**: PgBouncer transaction-mode pooling capping server connections under 100.
* **Cache-Aside Pattern**: Read cache first -> query DB on miss -> populate cache with TTL.
* **Stampede Defense**: Probabilistic early expiration (XFetch) or distributed mutex locks.
* **Zero-Downtime Migrations**: Expand (add nullable) -> Backfill historical data -> Cutover reads -> Contract (drop old).

---

## 4. AI Agents & LLM System Engineering

* **Observe-Plan-Act Loop**: Plan goal -> invoke typed tool -> inspect result -> self-correct -> verify acceptance criteria.
* **Subagent Delegation**: Partition heavy research into isolated child agent contexts; return concise summaries.
* **Hybrid RAG**: Combine BM25 sparse keyword retrieval with 768-dim HNSW dense vector cosine similarity + cross-encoder re-ranking.
* **Token Budget Headroom**: Reserve 15% system rules, 10% tools, 40% RAG, 20% history, 15% completion budget.
* **Three-Tier Agent Memory**: Working memory (scratchpad) -> Episodic memory (chronological logs) -> Semantic memory (vector vault).
* **AI Safety & Guardrails**: Enforce strict Zod schema extraction (temperature=0.0); delimit untrusted input in delimiters; verify output canaries.
