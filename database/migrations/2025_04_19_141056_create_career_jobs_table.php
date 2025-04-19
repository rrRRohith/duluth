<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('career_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('handle')->nullable();
            $table->string('description');
            $table->date('close_date')->nullable();
            $table->date('start_date')->nullable();
            $table->string('location')->nullable();
            $table->json('tags')->nullable();
            $table->string('email')->nullable();
            $table->string('link')->nullable();
            $table->boolean('remote_position')->default(false);
            $table->enum('status', ['published', 'draft'])->default('published');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('career_jobs');
    }
};
