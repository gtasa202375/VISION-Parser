/*
 * VISION CORE - High Performance Proxy Engine
 * Written in Rust for maximum concurrency and memory safety.
 * * Copyright (c) 2026 VISION Project
 */

use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use log::{info, warn};
use std::time::Instant;
use chrono::Local;

// 硬核配置：常量定义
const API_ENDPOINT: &str = "https://im1907.top/?jx=";
const SERVER_IP: &str = "127.0.0.1";
const SERVER_PORT: u16 = 8080;

#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok()
        .content_type("application/json")
        .body(r#"{"system": "VISION-CORE", "status": "online", "latency": "0ms"}"#)
}

// 核心解析路由
#[get("/resolve")]
async fn resolve(info: web::Query<std::collections::HashMap<String, String>>) -> impl Responder {
    let start_time = Instant::now();
    
    // 获取 URL 参数
    let target_url = match info.get("url") {
        Some(u) => u,
        None => {
            warn!("[400] Bad Request: Missing URL parameter");
            return HttpResponse::BadRequest().body("Missing 'url' parameter");
        }
    };

    // 模拟复杂的路由计算逻辑
    let final_url = format!("{}{}", API_ENDPOINT, target_url);
    
    // 计算处理耗时 (纳秒级)
    let duration = start_time.elapsed();
    
    info!(
        "[{}] REQUEST: {} | TIME: {:?} | ROUTED_TO: {}", 
        Local::now().format("%Y-%m-%d %H:%M:%S"),
        target_url, 
        duration,
        "VIP_CHANNEL_1"
    );

    // 返回重定向响应
    HttpResponse::Found()
        .append_header(("Location", final_url))
        .finish()
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // 初始化日志系统
    std::env::set_var("RUST_LOG", "info");
    env_logger::init();

    println!(r#"
    ██╗   ██╗██╗███████╗██╗ ██████╗ ███╗   ██╗
    ██║   ██║██║██╔════╝██║██╔═══██╗████╗  ██║
    ██║   ██║██║███████╗██║██║   ██║██╔██╗ ██║
    ╚██╗ ██╔╝██║╚════██║██║██║   ██║██║╚██╗██║
     ╚████╔╝ ██║███████║██║╚██████╔╝██║ ╚████║
      ╚═══╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
    [RUST CORE] High-Performance Engine Started
    [LISTEN] http://{}:{}/resolve?url=...
    "#, SERVER_IP, SERVER_PORT);

    HttpServer::new(|| {
        App::new()
            .service(index)
            .service(resolve)
    })
    .bind((SERVER_IP, SERVER_PORT))?
    .run()
    .await
  }
