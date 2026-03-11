---
title: Introduction
hide_title: true
sidebar_position: 1
---
# OpenIM Technical Sharing

## 1. Project Background and Development History

Since the launch of the open-source project, OpenIM has gone through 4 years of development. At present, three major versions have been iterated, and the functions and performance have been gradually improved and optimized.

### Targets for V3.x Series
More comprehensive functions, introducing multi-level caching and distributed deployment solutions to support larger-scale business scenarios. Currently, the open-source edition will continue to maintain version 3.8 and the commercial edition. Earlier versions will no longer be maintained.

During the 5-year evolution process, the team has accumulated a lot of experience in architecture design, component selection, and development practices, and has also experienced many challenges. Next, combining actual cases, we will share some key ideas and practical experiences in our projects, hoping to take this opportunity to communicate with everyone.

---

## 2. Performance and Consistency: Multi-level Caching System

In the field of instant messaging, performance is usually one of the core indicators for evaluating system availability, and caching is a common means to solve performance bottlenecks.

### Multi-level Cache Structure

1. **Local Cache**
   Stores core high-frequency data, for example, the client stores messages, conversations, groups, etc.

2. **Distributed Cache (Redis)**
   Stores shared data through distributed caches such as Redis to improve global access efficiency.

3. **Persistent Storage (MongoDB)**
   Persistently saves key business data such as historical messages and user profiles to ensure data security and traceability.

### Data Consistency

While bringing performance improvements, multi-level caching also faces the challenge of data consistency. We guarantee data consistency through the following means:

- **Reasonable Invalidation Strategy**
  Introduced the `rockscache` component to solve the consistency problem of distributed caching.

- **Asynchronous Notification via Message Queues**
  When data changes, through the IM notification mechanism, we ensure that data is highly synchronized, and use incrementality to reduce network traffic and improve synchronization efficiency.

---

## 3. Component Selection: MongoDB, Redis, Kafka Show Their Prowess

As the business scale grows and the demand for real-time performance increases, how to choose suitable components is crucial. In OpenIM's technology stack, MongoDB, Redis, and Kafka are the three indispensable core components. They each have their own advantages and cannot replace each other.

### MongoDB

- Suitable for storing massive unstructured or semi-structured data, such as chat records, group information, etc.
- Supports flexible document models, making it easy to implement certain queries and aggregation operations.

### Redis

- Ultra-high performance in-memory database, providing multiple data structures suitable for caching scenarios.
- Through persistence and cluster functions, it possesses a certain degree of disaster recovery capability while ensuring performance.

### Kafka

- High-throughput message queue used for asynchronous message processing and system decoupling.
- Through partitioning and replica mechanisms, it guarantees reliability and scalability of the system in high-concurrency scenarios.

In project practice, we comprehensively utilize these components according to specific business needs, allowing each tool to play to its strengths to achieve a highly available and highly concurrent system architecture.

---

## 4. Development Practices: Reflection, Generics, and Toolchains

Code simplicity and maintenance costs are often positively correlated: the simpler the code, the better it can avoid reinventing the wheel and improve readability and extensibility.

### The Magic of Reflection and Generics

- **Reflection**
  Reflection can greatly reduce redundant code and reduce coupling.

- **Generics**
  When dealing with similar logic and similar objects, extensive use of generics can reduce repetitive code and improve extensibility.

### Construction and Start-Stop of the Toolchain

- **Cross-platform Build**
  In order to adapt to multi-platform environments (Linux, Mac, Windows, etc.), the project compilation uses `mage`, avoiding the introduction of various scripts.

- **One-click Start/Stop and Operation/Maintenance**
  Unified use of the `mage` tool achieves functions such as starting, stopping, and viewing logs for each service, getting things done with one click and lowering the threshold for operation and maintenance.
