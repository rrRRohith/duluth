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
        Schema::create('experience_jobs', function (Blueprint $table) {
            $table->foreignId('experience_id')->constrained('job_experiences')->cascadeOnDelete();
            $table->foreignId('job_id')->constrained('career_jobs')->cascadeOnDelete();
            $table->primary(['experience_id', 'job_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experience_jobs');
    }
};
